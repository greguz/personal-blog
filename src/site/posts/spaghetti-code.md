---
date: 2019-11-01
title: Spaghetti Code
subtitle: Goodbye Hexo, welcome Metalsmith
---

As the subtitle may suggest, I've left the super-fast-to-start Hexo framework for a more complicated solution, because, you know, I want to cook my spaghetti!

Long story short, I came upon some limitations about using Hexo and its themes, so instead of hacking around the entire codebase to do some (apparently) simple tasks, I've opted for a fresh start, plus this is a perfect occasion to try some new NPM package.

The inspiration came while I was publishing a plugin for a cool web framework named Fastify. Its website looked lean and simple. Digging around the website's repository, I've become aware of the existence of Metalsmith, a static site generator framework with a twist: the entire codebase is around 400 lines of code. What? How? Simple, It takes the information from the source files from a source directory, and it writes the manipulated information to files into a destination directory. All manipulations, however, exclusively leaves to plugins. Now I have to cite Alestorm: Oh wow!

Its manipulation system is well thought out and a breeze to use, Its Achilles' heel is the ecosystem, not enough developed, but let the baby grow for a while and the problem will hopefully vanish. Chosen Ninjucks as a templating engine, and Clean Blog as CSS boilerplate, here we are, a nice-generated static site that listens to my will without hesitation.

So, welcome to my new blog.
