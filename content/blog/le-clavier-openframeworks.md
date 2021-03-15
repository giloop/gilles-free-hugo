---
title: "Le clavier pour les 0-4 ans"
date: 2013-10-19T08:20:10+06:00
description: "Un logiciel éducatif et rigolo"
description: "Un logiciel éducatif et rigolo pour découvrir les touches du clavier en s'amusant"
type: "post"
image: "images/post-head/GiloopBox-leclavier.jpg"
categories: 
  - "Programmation"
tags:
  - "Creative coding"
  - "Openframeworks"
  - "sampler"
---


## Le pourquoi du comment

J'ai toujours éprouvé un sentiment de culpabilité à interdire à ma fille de se faire plaisir sur l'ordinateur en tapant n'importe quoi sur le clavier. Combien de fois je lui ai dit "non" tandis que j'étais en train d'écrire un mail et qu'elle rêvait de pouvoir faire elle aussi faire de l'internet !

Avant que la culpabilité ne me ronge de trop, j'ai donc fait cette application pour la laisser "tripoter" le clavier de l'ordinateur en toute tranquillité, et en plus de manière ludique et éducative. Pour chaque touche appuyée, un son est joué et pas le même à chaque fois.

Deux modes de jeu, appuyer sur la touche `[F1]`  pour passer de l'un à l'autre :

1.  **mode découverte** du clavier, où le fait d'appuyer sur une touche déclenche un son de la lettre.
2.  **mode jeu**, où une lettre est affichée à l'écran et un son de la lettre est joué. L'enfant doit retrouver la bonne touche sur le clavier.

Il y a une touche un peu spéciale, c'est la touche `[Echap]` ou `[esc]` en haut à gauche qui sert à quitter le programme.

## Je veux le même, avec mes sons à moi !

Pour rajouter au côté ludique de l'application, il est possible de personnaliser les sons. C'est ainsi qu'après être parti sur une lecture sérieuse et précise des lettres, je me suis retrouvé à enregistrer ma femme et ma fille qui ont été beaucoup moins sérieuses que moi, pour le plus grand bien de l'application. Et maintenant, ma fille s'amuse beaucoup à utiliser ce <span style="color: #800080;">sampler insolite</span>.

Dans le dossier **data/sounds** du programme se trouvent une multitude de sons au format mp3, plusieurs pour chaque touche. Vous pouvez donc les changer, en rajouter d'autres, changer la langue, c'est libre, si on respecte quelques règles d'appellation des fichiers :

*   en informatique chaque touche du clavier à un code,un numéro entre 0 et 255. Par exemple les lettres minuscules ont un code allant de 97 (a), 98 (b) ... à 122 (z), pour les majuscules ça va de 65 (A) à 90(Z) et pour les chiffres de 48 (0) à 57 (9). Les curieux peuvent aller voir la page Wikipédia sur ce qu'on appelle les [codes ASCII](http://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange "Wikipédia codes ascii").
*   le nom des fichiers sons qui sont affectés à une touche doivent commencer par ce nombre, suivi du symbole '_'  (underscore ou tiret bas sous la touche '8') et d'une description du son, par exemple pour la lettre a on aura donc :

    *   97_a.mp3, 97_a-2.mp3, 97_apero.mp3, ...

*   **pas d'espace** dans les noms de fichiers, **pas de caractère accentué** (austérité informatique oblige).
*   dans le dossier, il y a d'autres sons qui ne commencent pas par des numéros, ce sont les sons qui servent à d'autres moments qu'à l'appui sur une touche :

    *   default_1.mp3, default_toto.mp3, ... : sons appelés quand une touche n'a pas de sons affectés ( bonne nouvelle vous n'êtes donc pas obligés d'enregistrer les sons des 105 touches du clavier)
Pour enregistrer des nouveaux sons, vous pouvez utiliser un micro et le logiciel [Audacity](http://audacity.sourceforge.net/ "Site du logiciel audacity"). De mon côté, j'ai choisi [Reaper](http://www.cockos.com/reaper/) qui est l'outil de traitement des sons qui présentent le meilleur compromis qualité/prix/performance puisqu'il peut être utilisé gratuitement sans limite autres que morale (j'ai donc fini par acheté une licence à 45€). On peut personnaliser les sons tout en s'amusant en moins d'un quart d'heure. Je ferai peut être un didacticiel un de ces jours, si le temps est propice.

## Mais comment ça marche ?

Ce programme a été réalisé en C++ avec la librairie [openframworks](http://www.openframeworks.cc/ "Site du toolkit openframeworks"). Les sources sont libres de droit, envoyez moi un mail pour les récupérer. Aucune restriction à compiler le programme pour le faire tourner sous Linux ou sous Mac, c'est juste que je n'ai pas pris le temps de le faire.

En cliquant sur le lien ci-dessous, vous récupérez un programme pour Windows dans un fichier .zip. Dézipper le dans un nouveau dossier et lancer l'exécutable : "clavierGilou.exe"

Pour télécharger le tout dans un beau package, c'est ici :

[![le package à télécharger](/images/GiloopBox-04-300x168.png)](/uploads/LeClavier_GillesGonon_v1.0_2013-10-14.zip) 
