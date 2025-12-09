+++
date = "2025-12-07"
title = "That's Remarkable by 42 times"
tags = ["blog", "privacy", "linux"]
+++

## Adding useless features to yet another forgettable blog

The developer's mind works in mysterious ways...

I was looking into how to jump on the "self-hosting" trend that's been going on lately. I have to admit that my timing wasn't perfect, considering the current RAM prices. But, honestly, I don't need or want to build (and maintain) a pricey server farm in my house. So, I decided to do something simple enough to be hosted on a potato board like a Raspberry Pi 2.

_Why not add a self-hosted comment section to my blog?_

Deal's done. To the laboratory!

## Bill of materials

Hoping to find an existing project, I set the following requirements:

- Open Source / Self-hosting
- Linux ARM64 support
- No heavy database dependencies <small>(this isn't Facebook)</small>
- Single binary
- Privacy for my users <small>(again, this isn't Facebook)</small>

Long story short: I found this wonderful little piece of code, [Remark42](https://github.com/umputun/remark42).

For hosting, I went with OVH's basic VPS offering: it's dirt cheap, more powerful than a potato, and it lets me avoid giving money to the usual big tech corps.

## Doing the thing

### Start the VPS

Visited the [OVH VPS page](https://www.ovhcloud.com/it/vps/), threw some money at them, waited 10 minutes, and now I have a beautiful Fedora-based server under my direct command.

Why did I choose Fedora instead of _[insert distro name]_?
- There's no Arch Linux listed <small>(btw)</small>.
- I dislike Ubuntu.
- Debian is way [too stable](https://i.kym-cdn.com/photos/images/newsfeed/000/511/991/3a5.jpg).
- Linus Torvalds uses Fedora.

Are we up to date? I don't think so...

```bash
sudo dnf upgrade --refresh
sudo reboot
```

> I love the smell of fresh packages in the morning.

### Install Remark42

```bash
wget https://github.com/umputun/remark42/releases/download/v1.14.0/remark42.linux-amd64.tar.gz
tar -xzf remark42.linux-amd64.tar.gz

# move binary into its final place
sudo mv remark42.linux-amd64 /usr/local/bin/remark42
sudo chown root:root /usr/local/bin/remark42

# handle SELinux
sudo restorecon -v /usr/local/bin/remark42
```

I want my executables the way I want my distributed services: the more isolated and decoupled, the better.

Let's create a dedicated user and directory for the Remark42 server process:

```bash
# create service user for Remark42 process
sudo useradd -r -s /usr/sbin/nologin remark42

# setup Remark42 workdir
sudo mkdir /var/remark42
sudo chown remark42:remark42 /var/remark42
sudo chmod 750 /var/remark42/
```

The good folks behind Remark42 have already provided an example [systemd unit template](https://remark42.com/docs/getting-started/installation/) for me. How nice and convenient.

Now tapping `sudo nano /etc/systemd/system/remark42.service`:

```ini
[Unit]
Description=Remark42 Commenting Server
After=syslog.target
After=network.target

[Service]
Type=simple
EnvironmentFile=/etc/remark42.env
ExecStart=/usr/local/bin/remark42 server
WorkingDirectory=/var/remark42
Restart=on-failure
User=remark42
Group=remark42

[Install]
WantedBy=multi-user.target
```

Anyone who has ever configured a systemd unit should already know the next step just by looking at the just-created service.

It's time to personalize our Remark42 instance.
A wonderful list of all available environment variables is available on the official [docs website](https://remark42.com/docs/configuration/parameters/).

Now, let's run `sudo nano /etc/remark42.env`:

```env
REMARK_URL=https://remark42.domain.net
REMARK_PORT=8080
SECRET=my_symmetric_jwt_secret
SITE=my_site
SIMPLE_VIEW=true
EMOJI=true

AUTH_ANON=true # debug and testing during installation

AUTH_GITHUB_CID=my_github_client_id
AUTH_GITHUB_CSEC=my_github_client_secret
```

I can now give life to my personal Remark42 server:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now remark42
```

### Going public with Caddy and Let's Encrypt

A quick search for _"simple Let’s Encrypt reverse proxy"_ returns _Caddy_ right at the top of the results.

Seems legit enough to me!

```bash
sudo dnf install caddy
sudo nano /etc/caddy/Caddyfile
```

Just replace the whole thing with something like this...

```text
remark42.domain.net {
  encode gzip
  reverse_proxy 127.0.0.1:8080
}
```

...a quick reboot...

```bash
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo systemctl enable --now caddy
```

Done.

## Happy commenting

If you want to.
