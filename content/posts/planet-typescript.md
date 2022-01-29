+++
title = "Planet TypeScript"
date = "2022-01-28"
author = "Giacomo Gregoletto"
# cover = "img/hello.jpg"
# description = ""
tags = ["javascript", "typescript", "web", "rant", "karma"]
draft = true
+++

You're thinking about how **simple** your life is with JavaScript. Want to add a property to an object at runtime? Yes, sir. Want to override a method and put a hacky middleware to act as a proxy? No problem. Want to inherit from more than one class? That's doable. Want a massive open-source codebase with a free package manager? Piece of cake. And then, **Microsoft** came.

_[ [Dramatic Sound Effect](https://www.youtube.com/watch?v=cphNpqKpKc4) ]_

> Hi, I'm Giacomo's disclamer. I'm here to tell the kind reader that my creator uses TypeScript actively during work-time and free-time, and he's happy about It. This article should be considered a mere interpretation of its thoughts and **not** a declaration of war against Microsoft. Thanks for your attention.

The year is 2022. We won the fight against Internet Explorer. We lost countless troops under the constant fire of mother Microsoft and their Edgy (pun intended) browsers, but we won. Even the programmers of MS Explorer use Chrome now. [What](https://www.youtube.com/watch?v=zicGxU5MfwE) [a](https://www.washingtonpost.com/national/coronavirus-toilet-paper-shortage-panic/2020/04/07/1fd30e92-75b5-11ea-87da-77a8136c1a6d_story.html) [time](https://www.youtube.com/watch?v=Qh9KBwqGxTI) [to]() [be]() [alive](). We suppose to leave the most idiotic choices to the past. But, somehow, I'm writing this article. Oh boy.

Hand me my favorite keyboard so we can get into technical rants.

## ECMAScript modules (ESM for friends)




Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec interdum metus. Aenean rutrum ligula sodales ex auctor, sed tempus dui mollis. Curabitur ipsum dui, aliquet nec commodo at, tristique eget ante. **Donec quis dolor nec nunc mollis interdum vel in purus**. Sed vitae leo scelerisque, sollicitudin elit sed, congue ante. In augue nisl, vestibulum commodo est a, tristique porttitor est. Proin laoreet iaculis ornare. Nullam ut neque quam.

## You've gained Karma

Sed a leo id risus venenatis vulputate non quis nulla. Aenean nisl quam, lacinia pulvinar orci sit amet, eleifend eleifend dui. Nulla tempor ligula leo, eu vehicula quam condimentum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla gravida tristique nunc sed semper. Morbi nec felis odio.

## You've lost Karma

Sed a leo id risus venenatis vulputate non quis nulla. Aenean nisl quam, lacinia pulvinar orci sit amet, eleifend eleifend dui. Nulla tempor ligula leo, eu vehicula quam condimentum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla gravida tristique nunc sed semper. Morbi nec felis odio.





- incompatibilità con feature base di Node.js (ESM)
- Inconsistenza nella definizione dei tipi (un modulo fa una cosa, un modula ne fa un'altra, un altro modulo non ha i tipi)
- Complessità nel tooling (i test devono essere transpilati diversamente dalla build, la build e i test devono funzionare sia in locale con una versione di Node.js come anche nelle pipeline che hanno un env differente)
- Lenghty code
- Performance cost (TypeScript ha un costa nel tempo di build, e anche nel tempo di sviluppo)
- Compiler options craziness
- Can be a standard
- Custom "standard"
- Senseless decisions (object type)