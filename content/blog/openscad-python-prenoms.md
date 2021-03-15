---
title: "Automatiser Openscad avec Python"
date: 2020-10-24T14:46:10+06:00
description: "Openscad + Python pour générer des impressions 3D"
type: "featured"
image: "images/featured-post/PlaquesPrenoms.jpg"
categories: 
  - "Impression 3D"
tags:
  - "Programmation"
  - "Openscad"
  - "3D printing"
---

Note: Updated version & code on [my github page](https://github.com/giloop/3D-printings "github 3D Printing stuffs"). 

Cet article fait suite à une demande de ma femme qui me demandait si je pouvais lui imprimer des plaques avec les prénoms des enfants de sa classe. Comme je ne me voyais pas générer une à une les 23 plaques des enfants, je me suis demandé comment automatiser la chose.

La solution proposée, consiste à créer les plaques avec Openscad en paramétrant le prénom par des appels en ligne de commande. Il est alors possible d'automatiser le traitement avec un script Python pour générer les plaques :

*   création des fichiers STL des plaques de chaque prénom d'une liste
*   création d'un script Openscad qui assemble les STL en grille pour les imprimer en 3D
*   appel de Slic3r

Codes python et openscad pour générer les plaques des prénoms" : [codes à télécharger ici](http://gilles.gonon.free.fr/wp-content/uploads/PlaquesPrenoms-codes-openscad-python.zip )

{{< highlight c >}}
</usr/share/fonts/truetype/stardos-stencil/StardosStencil-Bold.ttf>;
 prenom = "Kéziah";
 font = "StardosStencil";  // "Liberation Sans";
 style = ""; // ":style=Bold";
 lCadre = 65;
 hCadre = 20;
 difference() {
    translate([lCadre/2-5, hCadre/2-5, 1]) roundedBox(lCadre, hCadre, 2, 3);
    translate([0,0, -0.5]) linear_extrude(height = 3) text(prenom, size = 11, font = str(font, style), $fn = 20);
 }

module roundedBox(x,y,z,rad){
  hull() {
     translate([-x/2+rad, y/2-rad,-z/2]) cylinder(h=z,r=rad, $fn=50);
     translate([ x/2-rad, y/2-rad,-z/2]) cylinder(h=z,r=rad, $fn=50);
     translate([-x/2+rad,-y/2+rad,-z/2]) cylinder(h=z,r=rad, $fn=50);
     translate([ x/2-rad,-y/2+rad,-z/2]) cylinder(h=z,r=rad, $fn=50); 
  }
 }

{{< / highlight >}}

![Plaque de prénom créée avec Openscad](http://gilles.gonon.free.fr/wp-content/uploads/PlaquePrenomRender.png)

L'appel d'Openscad en ligne de commande en passant une variable est donné en exemple ci-dessous. On génère un fichier STL customisé sans ouvrir Openscad. Un customizer à pas cher !

```openscad -o Mickaël.stl -D "prenom=\"Mickaël\"" PlaquePrenom.scad```

Il suffit alors de faire un script python qui automatise les appels à Openscad pour faire un fichier STL par prénom. Il est ensuite possible de créer un script Openscad qui place les plaques générées en grille pour les imprimer en 3D. Si votre imprimante est connectée à votre PC, il est possible d'automatiser toute la chaîne...

On aurait pu faire une boucle directement dans Openscad pour créer la grille, mais la solution Python présente l'avantage de pouvoir générer plusieurs fichiers STL, car dans mon cas il me fallait 2 grilles de 12 prénoms pour faire rentrer les 23 enfants de la classe.

Pour résumer, le script python :

*   crée un fichier STL par prénom (élément d'une liste Python) en appelant Openscad. Les prénoms peuvent être encodés en UTF-8 avec accents,
*   crée N scripts Openscad qui rassemblent les fichiers STL et les placent en grille, 12 fichiers par script : Assemblage-1.scad, Assemblage-2.scad, ...
*   génère les fichiers STL des grilles pour impression 3D en appelant Openscad.
*   
![Assemblages des fichiers STL pour impressions 3D](http://gilles.gonon.free.fr/wp-content/uploads/Assemblages-1et-2.png) Assemblages des fichiers STL pour impressions 3D


Télécharger les [codes des fichiers Python et Openscad](http://gilles.gonon.free.fr/wp-content/uploads/PlaquesPrenoms-codes-openscad-python.zip "Codes python et openscad pour générer les plaques des prénoms") servant à générer l'ensemble.

![Un extrait du résultat final imprimé](http://gilles.gonon.free.fr/wp-content/uploads/PlaquesPrenomsLow.jpg)