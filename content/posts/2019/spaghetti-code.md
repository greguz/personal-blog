+++
date = "2019-11-01"
title = "Spaghetti Code"
tags = ["blog", "javascript"]
+++

As the subtitle may suggest, I've left the super-fast-to-start Hexo framework for a more complicated solution: because, you know, I want to cook my own spaghetti!

Long story short, I ran into some limitations with Hexo and its themes. Instead of hacking around the entire codebase to achieve (seemingly) simple tasks, I decided to start fresh. Plus, this felt like the perfect opportunity to try out some new NPM packages.

The inspiration came while I was publishing a plugin for a cool web framework called Fastify. Its website looked lean and simple. While digging through the repository, I discovered a static site generator framework with a twist: Metalsmith. The entire codebase is around 400 lines of code. What? How? Simple. It takes source files from a source directory, processes them, and writes the manipulated output to a destination directory. All manipulation, however, is left entirely to plugins.

Now I have to quote Alestorm: Oh wow!

Its plugin-based manipulation system is well thought out and a breeze to use. Its Achilles' heel? The ecosystem: still a bit underdeveloped. But let the baby grow for a while, and that problem will (hopefully) vanish.

With Nunjucks as the templating engine and Clean Blog as the CSS boilerplate, here we are: a nicely generated static site that listens to my will without hesitation.

So, welcome to my new blog.
