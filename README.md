# daara-it
> D-IT L'informatique plus qu'une passion, un mode de vie
  
### Version

python => v3.6 ou soupérieure


django => v2.1


node => v10.13.0


npm => v6.5.0


## Utilisation


### Installation des prérequis

> Installation de python

[Python!](http://python.org)
> Installation de nodeJS

[NodeJs!](https://nodejs.org/)
> Installation de NPM

[NPM!](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Cloner le projet

```sh

$ git clone https://github.com/xarala221/daara-it.git

$ cd daara-it

```

Installation des dépendances
> créer un environnement virtuel avent de démarrer

[Windows!](https://docs.djangoproject.com/fr/2.1/howto/windows/)

[Linux!](https://linuxize.com/post/how-to-create-python-virtual-environments-on-ubuntu-18-04/)

[MacOS!](https://sourabhbajaj.com/mac-setup/Python/virtualenv.html)
```sh
$ npm install
$ pip install -r requirements.txt
```
Lancer la migration
```sh
$ python manage.py migrate
```
Lancer webpack pour travailler en locale
```sh
$ npm run dev
```
Lancer l'application
```sh
$ python manage.py runserver
```
Lancer webpack pour la production
```sh
$ npm run build
```
