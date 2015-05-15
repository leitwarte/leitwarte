# Leitwarte - A deployment tool 
[Leit-war-te](https://www.howtopronounce.com/german/leitwarte/): A place with lots of knobs and monitors to monitor and run a complex plant. German for control room. 

![Control Room](doc/img/controlroom.jpg)

## About this application
Leitwarte is a tool to manage hosts, deploy software using [Ansible](http://www.ansible.com/) and Meteor applications via [Docker/mup](https://github.com/arunoda/meteor-up).

## Documentation

later.

## Implemented Functionality

- View, add, edit, remove hosts
- Health checks for hosts (ping)

## Roadmap

Lots to do... see the [Trello board](https://trello.com/b/Fracwcz8/leitwarte-roadmap).

- Manage hosts (deployment targets)
- Provide overview of known hosts
- Add simple monitoring functionality (is host up/down)
- Manage mup configurations
- Associate mup configurations with host
- Deploy mup to all/selected hosts
- Manage Ansible playbooks (locally)
- Run Ansible playbooks from web UI
- Manage variables (locally)
- Set variables per host
- Remove insecure package
- Implement user roles
- Deploy leitwarte as Docker container

## Legal stuff

Image credits for [Old control room, Amagerværket](https://www.flickr.com/photos/chrisalban/15217591075/in/photolist-pbJ8DV-6yFtEQ-9heNod-aeS6DR-5GAAzH-5HVVA7-aeUUEo-LcStu-aeUR17-8wRCnr-9mSvA8-9mSwBB-5mLtF8-7SGUrP-7SLc4j-5mQHBd-a9WcZv-aadkD5-a9VWKa-5mQJFU-5mQMDG-6pZhsc-5mLuHg-4jyB6r-6hq6qH-5mQK3d-5mLuRV-dWKBKq-5mQK7j-dmtsHx-9FmLxa-4xXJjV-6yBo18-a9XtU5-5mLtwp-nUUL9h-6yBng4-6yFt4b-6yFtjY-6yFttu-6yFtnh-5mQMVu-cSbdeY-v2GNK-j2uT28-4jyB8D-4jCDKN-5mLx2x-5mLvmt-63FqNS) by Chris Alban Hansen, [Some rights reserved](https://creativecommons.org/licenses/by-sa/2.0/legalcode).
Favicon [Maker's Start Button](http://openclipart.org/detail/176337/makers-start-button-by-algotruneman-176337) by [algotruneman](https://openclipart.org/user-detail/algotruneman).

This software is published under the [ISC license](http://choosealicense.com/licenses/isc/).
