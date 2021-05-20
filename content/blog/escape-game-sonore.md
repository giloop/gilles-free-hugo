---
title: "Un Escape Game sonore 👂"
date: 2021-05-18T09:42:09+02:00
description: "Pour l'anniversaire de ma fille, j'ai créé deux épreuves d'escape game à base de son : Le Gueulomaton pour décoincer une clef accrochée au plafond et un indice de combinaison à base de samples aléatoires ... On ne se refait pas !"
type: "featured"
image: "images/featured-post/happy-birthday.jpg"
summary: "Pour l'anniversaire de ma fille, j'ai créé deux épreuves d'escape game à base de son : Le Gueulomaton pour décoincer une clef accrochée au plafond et un indice de combinaison à base de samples aléatoires ... On ne se refait pas !"
categories: ["Maker"]
tags: ["Maker", "Arduino", "Serial", "Sampler", "Sound board", "Creative coding"]
draft: false
---

Pour l'anniversaire de ma fille, en mode confiné, nous avons fait un escape game. Un escape game tout prêt pour "libérer le village du terrible dragon". Sympa, mais pas très personnalisé. J'ai donc rajouté **deux** épreuves de ma création à base de son : 

- un indice de combinaison à base de samples aléatoires. 
- le Gueulomaton pour décoincer une clef accrochée au plafond, et accessoirement faire des photos des invités. Voir les explications [plus bas](#la-clef-du-cri)

Ces épreuves permettaient de trouver une combinaison et une clef pour récompenser les aventuriers par un trésor de pots de caramels au beurre salé 😋. 

Voici comment j'ai procédé 🧐. Avant de commencer, il est encore temps de vous dire que le tout m'a pris une après-midi 😓. L'épreuve de l'indice caché dans les samples sonores était un peu complexe et mérite d'être retravaillée, 🤯, mais le fait d'avoir des phrases personnalisées à beaucoup amuser les enfants 🥳. 

> Si vous êtes entre Rennes et Saint Malo et que vous souhaitez récupérer ou mettre en place ce système pour un évènement, [contactez-moi](/contact/) ! 

#### Les indices s'emmêlent

J'utilise pour ce projet une [Sound Board](https://learn.adafruit.com/adafruit-audio-fx-sound-board) d'Adafruit qui permet de déclencher des samples audio avec différents modes : aléatoires, en boucle, en ordre établi. L'utilisation est très simple, il suffit de : 

- d'associer des sons à chaque trigger de la carte (11 triggers pouvant recevoir jusqu'à 99 sons chacun, mais la mémoire est limitée ... ça serait trop beau). 
- de connecter des interrupteurs pour déclencher les sons
- d'alimenter la carte avec un chargeur de téléphone 
- de relier la sortie une enceinte audio par cable mini-jack

Si la connectique est plutôt simple et efficace, c'est dans le choix des sons et des interrupteurs que se créé l'énigme. Dans mon cas, j'ai récupéré 8 interrupteurs de *fortune* que j'ai mis en scène sur une vieille boîte à chaussure. 

Dans les photos ci-dessous, on voit la boîte à sons, extérieur / intérieur, le câblage sur une mini breadboard et même mes notes papiers pour organiser les sons. Il y a aussi une photo d'une épreuve de l'escape game de plateau, à laquelle l'indice sonore fait référence pour trouver la combinaision du cadenas à 3 chiffres 🔐 (dans l'oeuf gris).

{{< img-lightbox-gallery "directory"="escape" "sort"="asc" >}}

Voici comment les sons sont organisés : 

- Les 2 boutons type arcade (jaune et bleu) sont reliés au même trigger (n°2): il s'agit de phrases d'explications qui sont lues dans un ordre séquentiel 
  - T02NEXT00.ogg : "Bonjour"
  - T02NEXT01.ogg : "Les boutons renferment l'indice pour trouver la combinaison"
  - T02NEXT02.ogg : "Si vous entendez des mots, un conseil : Notez les !"
  - T02NEXT03.ogg : "Presque tous les boutons disent la vérité"
  - T02NEXT04.ogg : "Il y a des boutons farceurs"
  - T02NEXT05.ogg : "Bisous"
- Certains boutons donnent des indices de manière aléatoire sur l'endroit où trouver la combinaison
  - T03RAND00.ogg : "Le bouton carré est un gros mentueur "
  - T03RAND01.ogg : "La combinaison au carré vaut 82809"
  - T03RAND02.ogg : "L'indice est à ma droite"
  - T03RAND03.ogg : "Un bouton contient une phrase mélangé : c'est ça l'indice !"
  - T03RAND04.ogg : "La vie est belle souriez"
  - T04NEXT00.ogg : "L'indice est à ma droite"
  - T04NEXT01.ogg : "Enfin je dis ça, je dis rien moi"
  - T04NEXT02.ogg : "Et toi qu'est-ce t'en dis ?"
- Un des boutons contient l'indice, sous forme d'une phrase dont les mots sont séparés et lu aléatoirement : il faut donc que les enfants les notent pour remettre en ordre la phrase : "la combinaison est sur un oeuf gris". 
  - T01RAND00 → T01RAND06.ogg
- D'autres boutons contiennent juste des phrases en rapport avec l'évènement et les invités : 
  - Le petit bouton rond contient une version curieuse de la chanson "bon anniversaire" :
    - T05LATCH00.ogg : il est joué en mode On/Off (Latch): quand appuie sur ce bouton le son joue en boucle en continu,les autres boutons sont désactivés, et il faut réappuyer pour l'arrêter. 
  - Un des boutons contient des phrases en mode "radio londres" sur les invités :
    - T09RAND00.ogg : "Lucie in the Sky regarde la planète terre"
    - T09RAND01.ogg : "Héloise chevauche des licornes à la tombée du soir"
    - T09RAND02.ogg : "La Sybille nous prédit de bien belles lectures"
    - ...

- Enfin un des boutons (le tout carré) contient des faux indices 
  - T07RAND00.ogg : "La combinaison a au moins 2 chiffres identiques"
  - T07RAND01.ogg : "La combinaison est 007"
  - T07RAND02.ogg : "Chicorée"
  - T07RAND03.ogg : "Bleu"
  - T07RAND04.ogg : "Verte"

> 📯 Vous pouvez télécharger l'ensemble des sons utilisés [ici](/medias/PhrasesEscapeGameSybille.zip)

Et voici une vidéo d'illustration de l'ensemble et des sons et boutons. 

{{< youtube id="Xq6afVfTMmI" title="L'escape game sonore à base de boutons." >}}

#### La clef du cri 

Pour libérer la clef par le cri, j'ai réalisé un montage très simple à base d'arduino et d'un servo-moteur que j'ai relié en USB à la borne du Gueulomaton. 
De base dans le Gueulomaton, chaque cri déclenche un batch pour "habiller" la photo prise avec le cadre de l'évènement et envoyer la photo sur la borne où elle peut être imprimée. Dans ce cas, j'ai donc ajouté l'envoi d'une commande série au batch pour activer le servo d'un angle fixe (et retour à 0 lorsque l'angle atteint 180°). 

Voici le principe en vidéo 🔐 :

{{< youtube id="BJ2bs_jEuMI" title="Le boîtier pour libérer la clef en action." >}}

Voici le code Arduino :

```c++
/* L'envoi de données sur le port série entraine une petite rotation du servo moteur */

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int pos = 180;    // variable to store the servo position

void setup() {
  // initialize serial:
  Serial.begin(9600);
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  myservo.write(pos); 
}

void loop() {
  if (pos <= 0) {
    // Reset position et replace
    pos = 180;
    myservo.write(pos);
  }
  delay(500);
}

/* SerialEvent occurs whenever a new data comes in the hardware serial RX. This
  routine is run between each time loop() runs, so using delay inside loop can
  delay response. Multiple bytes of data may be available. */
void serialEvent() {
  pos -= 21;
  myservo.write(pos);
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
  }
}
```

Et la commande en ligne, qui peut être déclenchée par n'importe quel programme. Dans mon cas, le PC du nouveau Gueulomaton est sous Windows 10 et j'ai utilisé une commande Powershell :

```batch
$port= new-Object System.IO.Ports.SerialPort COM9,9600,None,8,one
$port.open()
$port.WriteLine("Turn")
$port.Close()
```

> Si vous êtes entre Rennes et Saint Malo et que vous souhaitez récupérer ou mettre en place ce système pour un évènement, [contactez-moi](/contact/) ! 

#### Ressources 

- Arduino examples : [Using Serial Monitor to Control Servo Motor](https://create.arduino.cc/projecthub/Kub_Luk/using-serial-monitor-to-control-servo-motor-cc1daf)
- Powershell Team : [Writing and Reading info from Serial Ports](https://devblogs.microsoft.com/powershell/writing-and-reading-info-from-serial-ports/)
- [Audio FX Sound Board](https://learn.adafruit.com/adafruit-audio-fx-sound-board) d'Adafruit : une carte sampleur tout intégré à ~20€ 
