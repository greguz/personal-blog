+++
date = "2025-09-06"
title = "Sald-A-Boom #1 (hardware)"
tags = ["music", "arduino", "sax-a-boom", "c++"]
+++

I'm gonna be honest.

I saw (a long time ago) the legendary [Jack Black's performance at Jimmy Fallon](https://www.youtube.com/watch?v=cLmCJKT5ssw), and immediatly I thought: "_I need to build one of those Sax-A-Boom_".

> Me from the future: GitHib project [here](https://github.com/greguz/sald-a-boom).

---

### The skeleton

First things first: it's a saxophone. After this revelation, the next steps were:

1. Open _[insert marketplace here]_
2. Search _"saxophone toy"_
3. `ORDER BY price ASC`
4. Buy the first item that has enough buttons (`8`)

I ended up buying the _Bontempi Baby Saxophone_.

{{< img "bontempi_baby_saxophone.jpg" "Bontempi Baby Saxophone" >}}

### The brain

I need a place to store those Jacky-Blacky sounds. I suppose microSD cards should be sufficient for the task. Also, I may need to output the sound somewhere (possibly). My grandpa's name was Arduino, and I'm currently in Italy. You get the gist.

The problem: which Arduino board? I was happy to discover the existence of the [MKR Zero](https://docs.arduino.cc/hardware/mkr-zero/) model:

- MicroSD port? Yup.
- Li-ion battery port? Check.
- Rechearge battery while connected to USB? Check.
- Simple-as-hell environment with a ton of [libs](https://docs.arduino.cc/libraries/arduinosound/)? Check.
- Enough power to handle audio files? Check.
- Low power consumption? Check.

### The heart

Boring musicians might say that what makes a saxophone a saxophone is how it sounds. True musicians know for sure that the secret to a wonderful musical performance lies in _who_ plays the instrument, _not_ in the instrument itself! And that was the longest way ever to say "The stock 2W cardboard speaker is more than enough".

Searching The Internet™ for inspiration, I found the [ArduinoSound](https://docs.arduino.cc/libraries/arduinosound/) project. It supports SAMD21 boards and I2S audio devices out-of-the-box. Splendid! I just so happened to have a spare _MAX98357_ breakout board from a past failed project.

Now we're talking!

### The [mouth](https://www.youtube.com/shorts/Oly8f4h5C78)

Not knowing that the original Sax-A-Boom doesn't have any kind of "blowing detection" feature, I was already prepared to integrate some sort of blow-detection mechanism to create a more realistic digital saxophone.

Luckily, opening the toy's shell revealed an interesting discovery...

{{< img "saldaboom_elecret.jpg" "Bontempi baby saxophone upper internals" >}}

That's an electret microphone! That baby toy had the blowing sensor that was missing from the original Sax-A-Boom! Not bad, Bontempi, not bad.

A quick "_Arduino electret mic_" search revealed the existence of the `MAX4466` amplifier, which is often used to amplify the microphone signal to feed an Arduino's analog input.

Move on.

### The nipples

Having gambled with Lady Luck on how the saxophone would be built, I quickly discovered that the button rails had 8 buttons and 6 pins. Before this experience, I wasn't aware of the mystical multiplexing method used to create a button matrix.

Basically, you can use `N` inputs and `M` outputs to drive an `N x M` button matrix. There are also some little details about floating/ghosting and diodes. I've found a lot of YouTube videos that explain the problem really well.

The final circuit was this one:

{{< img "saldaboom_buttons.jpg" "Sald-A-Boom bottons board schematic" >}}

Pins marked as `IN_ROW_N` are input pins. These pins support `INPUT_PULLUP` natively, so they're active when driven to ground (zero volts).

Pins marked as `OUT_COL_M` are output pins, driven sequentially from `HIGH` (disabled state) to `LOW` (at which point we can read the rows). Then they go back to `HIGH` and move to the next column.

Resistors are a useless addition, but I use them because I have trust issues when dealing with currents.

### The pinky

Add the official _MKR Proto Shield_ as the distribution board, a _10 kOhm potentiometer_ as the volume pot, and a generic _700mAh single-cell Li-Po_.

To the laboratory!

### Prototype

> One eternity later... _(cue SpongeBob narrator voice)_

{{< img "saldaboom_prototype.jpg" "Sald-A-Boom prototype" >}}

Rise and shine, my beast. Rise, and shine!
