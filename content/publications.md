---
title: "Publications"
date: 2021-02-17T14:46:10+06:00
description: "Qui es-tu Gilles Gonon ?"
summary: "Qui es-tu Gilles Gonon ?"
image: "images/publications.jpg"
---


[IRISA](#irisa) | [EUROSPEECH 05](#eurospeech-05)

[Thèse](#thèse) | [Mémoire de Thèse](#mémoire-de-thèse) | [CORESA 01](#coresa-2001) | [EUROSPEECH 01](#eurospeech-01) | [ICA 2001](#ica-2001) | [GRESTI 2001](#gretsi-2001) | [CFA 2000](#cfa-2000) | [JEP 2000](#jep-2000)

[Fourier Fractionnaire](#fourier-fractionnaire) | [SPC 2000](#spc-2000) | [GRETSI 99](#gretsi-1999) | [Rapport DEA](#rapport-dea-acoustique-1998)

[Rapports non publiés ](#rapports-non-publiés)

[Codage audio](#codage-audio) | [ENSEA](#ensea) | [Matrix-Pencil](#matrix-pensil) | [Réseau local CAN](#stage-ensea-1997)

## IRISA

### EUROSPEECH 05

#### Decision Trees with Improved Efficiency for Fast Speaker Verification

Gilles Gonon, Rémi Gribonval, Frédéric Bimbot

#### Résumé

Classification and regression trees (CART) are convenient for low complexity speaker recognition on embedded devices. However, former attempts at using trees performed quite poorly compared to state of the art results with Gaussian Mixture Models (GMM). In this article, we introduce some solutions to improve the efficiency of the tree-based approach. First, we propose to use at the tree construction level different types of information from the GMM used in state of the art techniques. Then, we model the score function within each leaf of the tree by a linear score function. Considering a baseline state of the art system with an equal error rate (EER) of 8.6\% on the NIST 2003 evaluation, a previous CART method provides typical EER ranging between 16\% and 18\% while the proposed improvements decrease the EER to 11.5\%, with a computational cost suitable for embedded devices.

```bibtex
@inproceedings{gileurospeech05,
author = "Gilles Gonon and R\'emi Gribonval and Fr\'ed\'eric Bimbot",
title = "Decision Trees with Improved Efficiency for Fast Speaker Verification.",
booktitle = "$9^{th}$ European conference on speech communication and technology, EUROSPEECH 05",
page = {2661-2664},
volume = 4,
year = 2005,
month = septembre
}
```

> **Téléchargement** : [PS (gzip)](http://gil.69.free.fr/pub/IRISA/GG_eurospeech2005_decision_trees_for_ASR.ps.gz) - [PDF](http://gil.69.free.fr/pub/IRISA/GG_eurospeech2005_decision_trees_for_ASR.pdf)

[🔼 Retour en haut](#top)

## Thèse

### Proposition d'un schéma adaptatif dans le plan temps-fréquence basé sur des critères entropiques. Application au codage audio.

Gilles Gonon

### Résumé

Les représentations adaptées contribuent à l'étude et au traitement des informations portées par les signaux en permettant une analyse pertinente différente pour chaque signal. Les solutions existantes proposent des critères d'adaptation dans les domaines temporel et fréquentiel mais souffrent d'un manque de souplesse des critères pour une représentation adaptée dans le plan temps-fréquence.
Ce travail de thèse porte sur l'élaboration d'une représentation utilisant successivement des segmentations temporelle et fréquentielle adaptées au signal plus souple que les solutions existantes. Le schéma proposé est appliqué dans un codeur perceptuel par transformée de type haute fidélité.
Le schéma de représentation développé segmente tout d'abord le signal temporellement à l'aide d'un critère entropique local. Pour cela, un estimateur d'entropie locale est étudié analytiquement et le critère fournit un indice des variations d'entropie du signal propice à une segmentation automatique séparant les zones transitoires et les zones stationnaires. Les tranches temporelles ainsi délimitées sont alors décomposées en paquets d'ondelettes et une recherche de la meilleure base permet l'adaptation en fréquence de la représentation. À ce titre, une extension de la recherche de meilleure base est proposée pour augmenter le dictionnaire des bases disponibles par rapport au cas dyadique. À l'issue de cette analyse le signal est localisé dans des atomes du plan temps-fréquence.
Dans la partie application, un schéma de codage orginal permettant l'inclusion de notre représentation est présenté. Le détail de l'implémentation du codeur est fourni jusqu'à la composition de la trame binaire. Ce codeur est ensuite évalué par des tests subjectifs comparant les signaux compressés aux originaux et aux signaux du standard MPEG-1 Layer 3 pour un débit de 96 kbit/s.
Les résultats montrent que l'utilisation du schéma de représentation adapté dans un codeur est compétitif avec les solutions des codeurs standards bien que de nombreuses améliorations soient encore possibles.

```bibtex
@phdthesis{gilthese2002,
author = "Gilles Gonon",
title = "Proposition d'un schéma adaptatif dans le plan temps-fréquence basé sur des critères entropiques. Application au codage audio.",
year = 2002,
month = june
}
```

> Téléchargement [PS](http://gil.69.free.fr/Rapport_These/index.html) - [PDF](http://gil.69.free.fr/Rapport_These/index.html)

[🔼 Retour en haut](#top)

## Articles publiés dans le cadre de la Thèse

### CORESA 01

#### Un schéma de représentation adaptatif en temps et en fréquence pour le codage audio.

Gilles Gonon, Silvio Montrésor, Marc Baudry

### Résumé

Cet article présente un schéma de codage adaptatif en temps et en fréquence. La segmentation temporelle est effectuée à l'aide du critère entropique local et la segmentation fréquentielle est basée sur une extension de l'algorithme de recherche de la meilleure base à partir de la décomposition en paquets d'ondelettes. L'allocation utilise des critères énergétiques et psychoacoustiques pour pallier aux problèmes de sélectivité fréquentielle des paquets d'ondelettes. Les premiers résultats subjectifs informels sont satisfaisants pour des rapports de compression de l'ordre de 10 à 15.

```bibtex
@inproceedings{gilcoresa01,
author = "Gilles Gonon and Silvio Montrésor and Marc Baudry",
title = "Un schéma de représentation adaptatif en temps et en fréquence pour le codage audio. ",
booktitle = "Actes des $7^e$ Journ\'ees d'\'etude et d'\'echange CORESA 2001, Dijon, France",
page = {59-62}
year = 2001,
month = novembre
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGcoresa01.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGcoresa01.pdf)

[🔼 Haut de page](#top)

### EUROSPEECH 01

#### Improved entropic gain and adaptive time-frequency segmentation. Application to audio coding

Gilles Gonon, Silvio Montrésor, Marc Baudry

#### Résumé

In the search for adaptive representation of speech signals, the Wavelet Packet Decomposition (WPD) has been proved to be a efficient tool because of its frequency adaptation skills through the best basis search algorithm. The entropic minimization of this algorithm is bounded by two artifacts : the dyadic structure of the decomposition and the lack of temporal segmentation. We propose here a low cost extended tree in the WPD which improves the best basis search by reducing the entropy of the base and which is still compatible with the classical WPD. The decomposition also allows perfect reconstruction. The entropic test is updated to take into account the new basis. The preliminary use of a temporal segmentation, based on the Local Entropic Criterion highly improves the entropic gain of the global analysis. The results are shown on experimental speech signals comparing the gain of our scheme versus a usual WPD.

```bibtex
@inproceedings{gileurospeech01,
author = "Gilles Gonon and Silvio Montrésor and Marc Baudry",
title = "Improved entropic gain and adaptive time-frequency segmentation. Application to audio coding.",
booktitle = "$7^{th}$ European conference on speech communication and technology, EUROSPEECH 01",
page = {2661-2664},
volume = 4,
year = 2001,
month = septembre
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGeurospeech01.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGeurospeech01.pdf)

[🔼 Haut de page](#top)

### ICA 2001

#### Extended Best Basis Familly Tree and Entropy Diminution, Application to Audio Coding

Gilles Gonon, Silvio Montrésor, Marc Baudry

#### Résumé

The Wavelet Packet Decomposition (WPD) is a efficient tool in audio coding because of its frequency adaptation skills through the best basis search algorithm. The entropic minimization of this algorithm is bounded by the dyadic structure of the decomposition. In order to decrease the entropy of the best basis, a low cost extended tree in the WPD is used. It is still compatible with the classical WPD and insures perfect reconstruction. The entropic test is updated to take into account the new basis. We present an example of the resulting best basis on a simulation signal and evaluate the average entropic gain obtained on various audio signals.
Une version détaillée est aussi disponible (anglais ou français). 

```bibtex
@inproceedings{gilica01,
author = "Gilles Gonon and Silvio Montrésor and Marc Baudry",
title = " Extended Best Basis Familly Tree and Entropy Diminution, Application to Audio Coding ",
booktitle = "International Congress of Acoustics, ICA 01, Rome",
year = 2001,
month = may
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGica01.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGica01.pdf)

[🔼 Haut de page](#top)

### GRESTI 2001

#### Segmentation multibande adaptée basée sur le Critère Entropique Local pour le codage audio

Gilles Gonon, Silvio Montrésor, Marc Baudry

#### Résumé

Ce travail présente une nouvelle approche pour la segmentation des signaux audios. Le détecteur utilisé est non paramétrique et basé sur le Critère Entropique Local appliqué aux sous-bandes issues d'une analyse multirésolution, la transformée en ondelettes discrète (TOD). L'utilisation de la TOD permet d'augmenter la diversité des ruptures détectées et le taux de bonnes détections. Un post-traitement permettant de réduire le nombre de fausses alarmes est aussi présenté. Les résultats sont appliqués à un signal de simulation multicomposante bruité.

```bibtex
@inproceedings{gilgretsi01,
author = "Gilles Gonon and Silvio Montrésor and Marc Baudry",
title = "Segmentation multibande adaptée basée sur le Critère Entropique Local pour le codage audio",
booktitle = "18$^{ème}$ colloque GRETSI",
year = 2001,
month = sep
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGgretsi01.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGgretsi01.pdf)

[🔼 Haut de page](#top)

### CFA 2000

#### Construction d'un banc de filtres pseudo-QMF pour la recherche de meilleure base

Gilles Gonon, Silvio Montrésor, Marc Baudry

#### Résumé

Dans le cadre du traitement des signaux audio (restauration, codage), il est intéressant de travailler sur des sous-bandes fréquentielles du signal. Dans des travaux précédents ont été proposées des extensions des bases dyadiques utilisées avec l'algorithme de choix de la meilleure base. Cet article présente une méthode simple pour construire le banc de filtres correspondant à ces nouvelles bases. Ces filtres réalisés à partir des filtres QMF permettent de générer le père de deux sous-bandes adjacentes mais provenant de pères différents dans la structure dyadique.

```bibtex
@inproceedings{gilcfa00,
author = "Gilles Gonon and Silvio Montrésor and Marc Baudry",
title = "Construction d'un banc de filtres pseudo-QMF pour la recherche de meilleure base",
booktitle = "V$^{ème}$ Congrès de la Société Francaise d'Acoustique - CFA 2000",
year = 2000,
month = sep,
optnote =""
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGcfa00.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGcfa00.pdf)

[🔼 Haut de page](#top)

### JEP 2000

#### Extension de la recherche de meilleure base pour la Décomposition en Paquets d'Ondelettes. Application à l'analyse en sous-bandes de la parole

Gilles Gonon, Silvio Montrésor, Marc Baudry

#### Résumé

In the audio signal processing area (coding or restauration), subband analysis shows to be an efficient tool. Extensions of the dyadic basis usually used in Best Basis search have been proposed in former work. This article review these extensions and presents an easy way to construct the filter bank associated with such basis. The filters, designed from any usual Quadrature Mirror Filters and preserving their reconstruction properties, allow to generate the father of two adjacent subbands not coming from the same father in the dyadic decomposition and thus to perform the entropic test between these subbands, which is not otherwise possible. We then apply this new Best Basis on a speech signal wavelet packet decomposition.

```bibtex
@inproceedings{giljep00,
author = "Gilles Gonon and Silvio Montrésor and Marc Baudry",
title = "Extension de la recherche de meilleure base pour la décomposition en paquets d'ondelettes. Application à l'analyse en sous-bandes de la parole",
booktitle = "XXIII$^{èmes}$ Journées d'Études sur la Parole - JEP 2000 ",
year = 2000,
month = jun
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGjep00.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGjep00.pdf)

[🔼 Haut de page](#top)

## Fourier Fractionnaire

### SPC 2000

#### Filtering in fractional Fourier domains : Application to the Biot's waves

Gilles Gonon, Zine El Abidine Fellah, Claude Depollier

#### Résumé

In this paper we present a method to separate  the compressional waves which propagate in a porous medium when it is subject to a mechanical excitation. We start this work  by reviewing  the Biot's theory which describes  the propagation of ultrasonic pulses in a porous elastic medium. This modelling shows that three kinds of waves propagate in such media: two compressional waves and one shear wave, each one with its own velocity. Because of the  dispersive nature of  porous media, the identification of the compressional waves  is often difficult  by a traditionnal filtering while this identification is a compelling need  to extract the  part of the informations about the  elastic parameters,  the porosity and the  permeability of the  medium contained in each  of them. For that we propose a  filtering method using the  fractional Fourier transform as foundation.  The interpretation of this transformation as  a rotation in the time-frequency plane and its relationships  with time-frequency representations allow the filtering of signal in  a single fractional Fourier domain.

```bibtex
@inproceedings{giliasted00,
author = "Gilles Gonon and Zine El abidine Fellah and Claude Depollier",
title = "Filtering in Fractional Fourier Domains: Application to the Biot's Waves ",
booktitle = "Congrès IASTED SPC 2000 ",
year = 2000,
month = sep
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/FRT/GGspc00.ps.gz) - [PDF](http://gil.69.free.fr/pub/FRT/GGspc00.pdf)

[🔼 Haut de page](#top)

### GRETSI 1999

#### Estimation des paramètres d'un sinus glissant par Transformée de Fourier Fractionnaire

Gilles Gonon, Claude Depollier

#### Résumé

La Transformée de Fourier Fractionnaire (notée {\bf FRT}), introduite par Namias en 1980, permet une analyse des signaux dans des domaines intermédiaires entre les domaines temporel et fréquentiel. Suivant un angle donné du plan temps fréquence, elle décompose le signal sur une base orthogonale de sinus glissants. Elle est donc adaptée à l'analyse de signaux multicomposantes formés de sinus glissants et permet  une estimation robuste au bruit de la pente et de l'offset qui sont les deux paramètres essentiels des sinus glissants.

```bibtex
@inproceedings{gilgretsi99,
author = "Gilles Gonon and Claude Depollier",
title = "Estimation des paramètres d'un sinus glissant par Transformée de Fourier Fractionnaire",
booktitle = "17$^{ème}$ colloque du GRETSI",
year = 1999,
month = sep
}
```

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/FRT/GGgretsi99.ps.gz) - [PDF](http://gil.69.free.fr/pub/FRT/GGgretsi99.pdf)

[🔼 Haut de page](#top)

### Rapport DEA Acoustique 1998

#### La transformée de Fourier Fractionnaire

Gilles Gonon, Stage encadré par [Claude Depollier](mailto:Claude.Depollier@univ-lemans.fr)

#### Résumé

Ce rapport présente la transformée de Fourier fractionnaire et quelques applications en traitement du signal, comme le filtrage dans le plan temps fréquence ou la détection de chirp linéaire.

> Téléchargement [PS (gzip)](http://gil.69.free.fr/pub/FRT/GGrapportDEA.ps.gz) [PDF (zip)](http://gil.69.free.fr/pub/FRT/GGrapportDEA_PDF.zip)

[🔼 Haut de page](#top)

## Rapports non publiés

### Codage audio

#### Rapport biliographique sur le codage audio

Gilles Gonon

#### Résumé

Ce rapport biliographique détaillant les différentes étapes de la compression audio,à savoir l'analyse du signal, les phénomènes psychoacoustiques, l'allocation binaire et le codage entropique a été réalisé dans le but de présenter les différentes types de codeurs existants.

### Référence LaTeX

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/These/GGbiblio99.ps.gz) - [PDF](http://gil.69.free.fr/pub/These/GGbiblio99.pdf)

[🔼 Haut de page](#top)

## ENSEA

### Matrix-Pencil

#### Estimation des partiels d'une corde guitare par la méthode de Matrix Pencil

Gilles Gonon

#### Résumé

Mise en place de la méthode paramétrique basée sur l'algorithme de Matrix Pencil pour estimer l'inharmonicité des partiels de guitare due aux faibles vibrations de la table d'harmonie.

> Téléchargement : [PS (gzip)](http://gil.69.free.fr/pub/Ensea/GGmatrixpencil97.ps.gz) - [PDF](http://gil.69.free.fr/pub/Ensea/GGmatrixpencil97.pdf)

[🔼 Haut de page](#top)

### Stage ENSEA 1997

#### Liaison d'une caméra de type webcam à un réseau CAN

Gilles Gonon

### Résumé

Stage réalisé en 1997 au laboratoire DISCA de l'UPV (Université Polytechnique de Valencia).

> Téléchargement : non disponible

[🔼 Haut de page](#top)