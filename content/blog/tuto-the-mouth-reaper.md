---
title: "Tuto - The Mouth  Reaper"
date: 2021-03-03T15:46:36+01:00
description: "Explications pour utiliser The Mouth avec Reaper"
type: "featured"
image: "images/featured-post/tuto-the-mouth.jpg"
categories: ["music"]
tags: ["music", "cockos", "reaper", "native instrument", "the mouth"]
---


A step by step tutorial to use the crazy Native Instrument plugin **[The Mouth](https://www.native-instruments.com/en/products/komplete/effects/the-mouth/)** by Tim Exile with **[Reaper](https://www.reaper.fm/)**, an affordable and really efficient audio DAW from Cockos.

First of all, **2 examples** made while writing this tutorial.

A robotized version of « 7 nation army ». 1st Mouth on the guitar riff to add bass to it, « base follower » preset. 2nd Mouth on the voice with a tweak of preset « MC monotone »

{{< audio src="/medias/The_mouth_Reaper_seven_nation_robot.mp3" >}}

A simple vocoder example with midi keyboard chords with singing voice. The preset should be « Voice 3… » 

{{< audio src="/medias/The_mouth_Reaper_midi_chords.mp3" >}}

I wrote this tutorial mostly for me, after having spent 1 night for making The Mouth work in Reaper. By “*work*”, I mean :

- use the effect in realtime,
- use the midi keyboard as note input
- record the midi output generated on-the-fly by the Mouth.

This is mostly a compilation and informations gathered on different forums, mixed with
a few hours of fun and practice.

1. Using the effect is quite straightforward : create a new track click in the FX box and choose VST Reaktor (I use the free Reaktor player). Take care here NOT TO use Reaktor as a VSTi or you will always hear the incoming voice over the effect

Reaktor panels open, choose The Mouth.rkplr that’s it

2. To test the effect with the incoming voice (or even beats) select your channel, arm recording and activate monitoring (click the little speaker at bottom right till green)

So you can sing, choose, modify the preset to hear the result, select 2 presets and morph them using the snapshot morphing slider in Reaktor, …

3. Now you might want to add a little midi control to your vocoder, add a track to send midi information to The Mouth 
   - select your midi input and arm recording for the track, click the I/O black button and select the voice track in the “add new send …”
   - drop down menu.
  - In the send block created you can desactivate Audio (select None) as we only want the midi from this track
  - As a remark you could as well have set a “new receive” in the I/O settings of the voice track


That’s it, also set monitoring to on for the midi track and play with your keyboard.

If it’s working, you will see midi in activity in the Reaktor window and the notes in The Mouth keyboard window.
 
One last point, if you want want to record Midi out from The Mouth, create a new track, set I/O to receive midi information from your voice track where The Mouth is running. The trick to set Record output to midi. To do that, right click on the mini [IN OUT] button at the bottom right of the track info panel.

Now if you arm & record this track you will get the audio converted to midi by The Mouth.

Have fun.