+++
date = "2018-11-29"
title = "DSLogic Plus"
tags = ["c++", "playstation", "arduino"]
+++

Santa (nickname for TNT) has come to my town in advance, and has brought to me a brand new _DSLogic Plus_ logic analyzer. [heavy breathing]

Finally I have a way to test my uber-fake environment, and watch if everything is running smoothly.

{{< img dslogin_plus.jpg "DSLogin Plus" >}}

I have to admit that the construction quality is great. It came with a USB type C cable, fly wires and 16 hook clips, plus a nice black package. The driver and the software are the same thing, so just install and run. Just a tip for the Linux users: check **libusb** permissions. The software is simple, read the manual (just 50 pages with lots of images) and you are ready to analyze any piece of hardware without fear.

Back to my **DS2Box** project, I want to see the data trasmitted between my Arduino-s.

{{< img "ds2_test.jpg" "DualShock 2 emulator test" >}}

After some adjustments (scan frequency, V threshold, SPI decoder) I've found the way to read the SPI data.

{{< img "dsview.jpg" "DSView" >}}

Nothing wrong to fix, yess.
