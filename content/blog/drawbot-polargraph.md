---
title: "Construction d'un Drawbot Polagraph"
date: 2021-03-26T18:47:15+01:00
description: "Un robot qui dessine ... mais pourquoi faire 🥽 ?"
type: "post"
image: "images/post-head/DrawbotPolargraph.jpg"
summary: "Un robot qui dessine ... mais pourquoi faire 🥽 ?"
categories: ["Maker"]
tags: ["DrawBot", "Polargraph", "Processing", "Affiche du mois"]
---

## Présentation

Depuis longtemps, j'ai une fascination pour les drawbots, ces robots qui dessinent. Les projets sur ce sujet son très nombreux : 

- Paul The Robot : the best ! une installation interactive de [Patrick Tresset](https://patricktresset.com/) qui vous tire le portrait de manière artistique (la machine à son propre style). 
- [Eggbot](https://egg-bot.com/) : une petite machine pour dessiner sur des oeufs, un super projet accessible à tous
- [Polargraph](http://www.polargraph.co.uk/) : dessins à grande échelle sur des feuilles
- Dessin dans le sable : la sandtable Sisyphus de [Bruce Shapiro](https://www.taomc.com/sisyphus/) par exemple ou encore le [BeachBot](http://www.beachbot.ch/), un robot imaginé par ETK Zurich et Disney qui dessine sur la plage

## L'Eggbot

Il y a quelques années déjà, j'ai imprimé mon premier Eggbot et je me suis bien amusé avec, surtout durant la période de Pâques. Il y a un intrus
dans les images ci-dessous, il s'agit d'un oeuf traditionnel roumain ramené par un ancien collègue. 

{{< img-lightbox-gallery "directory"="eggbot" "sort"="asc" >}}

## Le polargraph

Il est maintenant temps de voir un peu plus grand. Dans ma maison actuelle, une ancienne étude de notaire, je dispose d'une vitrine me permettant d'afficher ce que je veux sur un espace de 1,65m*1m.

Notre idée était de ponctuer cet espace de messages à caractère poétique. Après un ou deux essais à la main plutôt moyen, je gardais en tête l'idée d'un drawbot qui pourraient nous aider à avoir de beaux résultats. 

C'est fait ! en partant d'une base du [Scriboo décrit par EmotionTech](https://www.reprap-france.com/article/realisez-vous-meme-un-drawbot-scriboo), j'ai modifié quelques pièces et je suis reparti de la géniale version Processing du programme [controleur Polargraph](https://github.com/euphy/polargraphcontroller). Elle n'est pas très intuitive, mais après pas mal de tests, c'est super. En plus tout ça tourne sous un rapsberry pi ce qui permet d'avoir une installation "*portable*" pour faire des interventions de dessins grandeur nature. 

Le détail des réglages pour la construction sont documentés [sur cette page](https://giloop-projects.gitlab.io/cours-giloop/05.maker/polargraph/), avec notamment les infos pour faire tourner le programme sur Raspberry Pi. 

> 💡 TODO : ajouter des photos

[Voir les affiches réalisées avec le Polargraph](/categories/affiche-du-mois)

