---
title: "Être Soi P5js"
date: 2021-05-02T21:28:10+02:00
description: "Une expérience sonore d'art génératif et participatif réalisée avec p5js, à 600 milliards de possibilités"
type: "post"
image: "images/post-head/etre-soi-p5js.jpg"
summary: "Une expérience sonore d'art génératif et participatif réalisée avec p5js, à 600 milliards de possibilités"
draft: false
categories: ["creative coding"]
tags: ["p5js", "audio"]
---

Des voix qui se mélangent pour dire une phrase, prendre conscience de l'autre par la parole, et au détour d'une voix connue, sourire.

> Être soi et 8 milliards d'individus à la dois

Et en cela mesurer chacun de nos actes à la hauteur de l'humanité grandissante. Pensée globale et action locale.

Être Soi et 8 milliards d'individus est à l'origine une [affiche](/blog/affiche-2020-10-etre-soi) de 1.5m par 1m exposée devant ma maison. Pour faire vivre ce message, j'enregistre des amis qui lisent la phrase et elle est en lue en concaténant les différentes voix de manière aléatoire. Comme une mise en abîme du message lu.

Il y a des années que j'ai cette idée en tête, enregistrer des gens qui disent tous un même texte, 
et mixer aléatoirement la lecture du texte pour créer une œuvre sonore inédite. 

Ce programme réalise le mixage aléatoire des 9 mots de la phrase. Avec à peine 20 enregistrements de chaque mots, 
on arrive à 20 puissance 9 possibilités ... 

J'ai eu le vertige en calculant le nombre de phrases différentes que l'application peut déjà générer : 593 milliards ... et ce n'est qu'un début. Si vous voulez contribuer, vous êtes les bienvenus, envoyez moi votre enregistrement avec votre prénom (explications sur le lien). Suivant le modèle ci-dessous :

{{< audio src="/medias/ex-phrase-b.mp3" >}}

Le programme utilise de manière intéressante l'objet p5.SoundFile en affectant dynamiquement le sample suivant à lire, via le callback onended.
Cela permet d'enchaîner les samples de manière relativement fluide. Une reverb globale est ajouter avec l'objet p5.reverb. 

C'est une évolution de l'application "À la découverte du clavier" que j'ai recodé récemment en p5js. 

##### L'expérience, [c'est ici](https://gueulomaton.org/p5js/etre-soi/)

Le code source est disponible [ici](https://gitlab.com/giloop-projects/p5js-sketches "source p5js"). 

