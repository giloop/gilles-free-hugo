---
title: "A p5js shortcode"
date: 2023-01-24T08:16:57+02:00
description: "Comment inclure un sketch p5.js dans Hugo"
type: "post"
image: "images/post-head/p5js.png"
summary: "Comment inclure un sketch p5.js dans Hugo"
categories: ["Programmation"]
tags: ["javascript", "creative coding", "p5js"]
draft: true
---

## En avant-propos - une démo

Après quelques heures de luttes acharnées pour inclure un sketch utilisant la librairie 
[p5.js](https://p5js.org), j'arrive à une solution fonctionnelle, mais pas tout à fait élégante. 
En tout cas, le résultat est satisfaisant. 

{{< p5js "flow-field/particule.js" "flow-field/sketch-1.js" >}}

## Un shortcode pour p5js

La solution consiste à rajouter un `shortcode` à mon site Hugo pour inclure des sketches
dans les articles. 
Voici le mode d'emploi et les points importants à retenir. Je reste preneur d'une solution plus élégante.

1. Création du shortcode dans la page : il prend pour arguments le script p5.js principal et ses dépendances, 
renseignés dans l'ordre de leur instanciation dans l'ex. ci-dessus `sketch-1.js` utilise `particule.js`.

```go
{{</*  p5js "flow-field/particule.js" "flow-field/sketch-1.js" */>}}
```

2. Un container du nom du sketch est créé dans la page à l'endroit où est inséré le shortcode, ici `<div id="sketch-1"></div>`
3. Il faut donc modifier le setup du sketch pour être inclus dans ce conteneur. 
4. Si vous créez des éléments de contrôle depuis votre sketch, il faut aussi les inclure dans le conteneur. il est aussi possible 
5. Dans le bout de code ci-dessous, la largeur du sketch est également adaptée à la largeur du conteneur. 

Voilà ce que donne le setup du sketch p5js adapté : 

```js
function setup() {
    
    const sketchId = 'sketch-1'; // id = script name without extension
    // Container computer width
    const contWidth = document.getElementById(sketchId).offsetWidth;
    
    // Canvas in parent id
    createCanvas(contWidth, 400).parent(sketchId);
    
    // Slider, button, ... in parent also, with style
    slider = createSlider(0.001, 0.25, 0.05, 0.01).parent(sketchId).class('p5-form');
    btn_new = createButton('Re-generate').parent(sketchId).class('p5-form')
    cb_field = createCheckbox('View perlin noise grid', false).parent(sketchId).class('p5-form');
    cb_field.changed(checkBoxLatch);
    cb_time = createCheckbox('Time evolution (3D noise)', true).parent(sketchId).class('p5-form');
    btn_new.mousePressed(genNewGrid);

    // Add parent & style at creation or afterward
    // slider.parent(sketchId).class('p5-form');
    // btn_new.parent(sketchId).class('p5-form');
    // cb_field.parent(sketchId).class('p5-form');
    // cb_time.parent(sketchId).class('p5-form');
    // ...
}
```

## Sous le capot le code

Au niveau du code du site Hugo, si tout tenait dans le shortcode, ça serait magnifique mais 
malheureusement l'inclusion est faite modifiant aussi le `footer.html` du thème Hugo. 

La principale raison pour cela est qu'il faut inclure les scripts js en dehors du corps du texte, et le 
choix a été fait dans le thème que j'utilise d'inclure tout les scripts JS dans le template du footer du site.

C'était assez tricky pour récupérer les scripts js déclarés comme paramètres du shortcode dans le footer.
J'ai utilisé pour cela le `.Scratch` de la page, dont l'appel varie suivant le contexte : 
`.Page.Scratch` dans le shortcode, `.Scratch` dans le layout `footer.html`. 

Le code du shortcode `p5js.html` est : 

```go
{{- $sketchId := path.Base (.Get (sub (len .Params) 1)) | replaceRE ".js$" ""}}
<div id="{{ $sketchId }}"> </div>
{{ $string := "" }}
{{ range .Params }}
    {{ $string =  printf "%s%s|" $string . }}
{{ end }}
{{ .Page.Scratch.Set "p5jslibs" (substr $string 0 -1) }}
<!-- p>Args : {{ .Page.Scratch.Get "p5jslibs" }} </p -->
```

Les scripts js sont ensuite ajoutés dans le `footer.html` avec le code suivant : 

```go
{{- if .HasShortcode "p5js" }}
<script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.min.js"></script>  
<!--script src="/js/lib/p5.min.js"></script-->
  {{ $libs :=  .Scratch.Get "p5jslibs" }}
  {{ $scripts := split $libs "|" }}
  {{ range $scripts }} 
   <script src='/js/sketches/{{ . }}'></script>
 {{- end }}
{{- end }}
```

J'ai enfin ajouté du CSS minimaliste dans mon `custom.css` pour rendre présentables les inputs créés 
directement en js depuis le sketch p5.js.

```css
/* P5 form elements */
.p5-form, .p5-form label { margin-bottom: 0;}

button.p5-form {
  cursor: pointer;
  border: 2px solid #ff4742;
  color: #ff4742;
  background: 0 0;
  padding: 8px;
}

button.p5-form:hover{
  background-color: #ff4742;
  color: #fff;
}

input[type='checkbox'], input[type=range] {
  margin: 0.5rem;
}

```