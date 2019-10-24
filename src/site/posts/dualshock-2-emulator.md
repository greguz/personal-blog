---
date: 2018-11-20
title: DualShock 2 emulator
subtitle: Trust me PlayStation, I'm a fully fledged DualShock 2 controller
---

Year 2018, and I'm still playing with a PlayStation 2. The only problem is the old crappy controller that I'm still using. Big problem if crack during a boss fight.

<!-- more -->

So I came up with replacing my old DualShock 2 controller with a brand new Xbox One controller. Why not? First problem, know the Xbox One controller protocol and fetch the controller status. Second problem, fire up to the PlayStation the controller status using the DualShock 2 protocol.

After some research I've found some interesting docs [here](http://store.curiousinventor.com/guides/PS2/) and [here](http://www.lynxmotion.com/images/files/ps2cmd01.txt) talking about the DS2 protocol. So i wrote some code to emulate it. But, because my logic analyzer is still missing somewhere in the world (I'm talking to you, TNT), I've a sort of fear about to connect an Arduino Uno directly to my PlayStation without a single way to understand what's going on. Luckily I have another Arduino, and online there's [some code](https://github.com/madsci1016/Arduino-PS2X) to connect a DS2 controller to an Arduino...

Test a fake DualShock 2 Arduino controller with a fake PlayStation 2 Arduino console!

Incredibly, the test went very well (sort of), so i smashed my ds2-emulator code on [GitHub](https://github.com/greguz/ds2-emulator).
