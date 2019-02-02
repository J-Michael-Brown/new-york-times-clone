# New York Times Site Clone

_An attempted clone of the NYT's newspaper website, for educational purposes._

### Author
J. Michael Brown

## Table of contents
**[Description](#description)**<br>
**[Setup & Installation](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>
**[Copyright](#copyright)**<br>

## Description

This project is an attempt at replicating a popular site utilizing several development tools that I would like to practice with. The NYT newspaper site is in no way affiliated with Myself or Epicodus (the educational company I am a student at).

On this site a user should be able to view articles. Articles will be written by authors (also viewable) and articles should be able to be commented on. One should be able to view articles in a given news section - such as 'World News' - and even subsections of that - such as 'Africa'. Another feature of the NYT site is the ability to view any given day's paper: a paper consisting of all articles published on a given day.

## Setup and Installation
See [SETUP.md](./SETUP.md) for details about tools you may need to install and use to work on and use this project on your Mac.  

Here are some links in case you need information about setup for other operating systems:  
[Angular](https://angular.io/);
[Angularfire](https://github.com/angular/angularfire2);
[Firebase](https://firebase.google.com/);
[Karma](https://karma-runner.github.io/latest/index.html);
[Jasmine](https://jasmine.github.io/);
[Node JS](https://nodejs.org/en/);
[TypeScript](https://www.typescriptlang.org/).

## Known Bugs

* Bootstrap not functioning

* error TS2339: Property '$key' does not exist on type 'Article'. Message appears when trying to prepare project for deployment, prevents creation of dist/ folder.

## Support and contact details
Michael Brown :: jmichaelbrown132737@gmail.com

## Technologies Used
(This wonderful table was lovingly pilfered from [Tanvi Garg](https://github.com/TanviCodeLife) and modestly edited for personal sensibilities.)

For versions and a full list of dependencies, plugins, and scripts see the "devDependencies" section in [package.json](./package.json).  

| Dependency | Description |
| --- | --- |
| angularfire2 | library for connecting Firebase with Angular |
| babel-core | Babel compiler core |
| babel-loaded | Babel loader for webpack |
| babel-present-es2015 | Specifies how Babel can convert ES6 to ES5 |
| clean-webpack-plugin | Clean your build folder(s) before building |
| css-loader | Interprets `@import` and `url()` like `import/require()` and resolves them |
| dotenv-webpack | imports information like API keys from .env to src/anyfile.js |
| eslint | Identifies and reports on patterns found in Javscript code |
| eslint-loader | ESLint loader for webpack |
| firebase | library for working with Firebase |
| html-webpack-plugin | Simplifies creation of HTML files to serve webpack bundles |
| jasmine | Allows Jasmine specs to be run |
| jasmine-core | JavaScript BDD testing framework |
| karma | Allows the execution of JavaScript code in multiple *real* browsers |
| karma-chrome-launcher | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium |
| karma-cli | Use Karma from the command line |
| karma-jasmine | Plugin - adapter for Jasmine testing framework |
| karma-jasmine-html-reporter | Dynamically shows test results at debug.html page |
| karma-jquery | Plugin - adapter for jQuery framework |
| karma-webpack | Use webpack to preprocess files in Karma |
| style-loader | adds CSS to the DOM by injecting a `<style>` tag |
| uglifyjs-webpack-plugin | Minifies JavaScript |
| webpack | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
| webpack-cli | Use webpack from command line |
| webpack-dev-server | Provides live reloading during development |
| css-loader and style-loader | renders images in DOM when `<img>` tag is used |

## License
Licensed under the MIT license.

## Copyright
Copyright (c) 2019 ** Michael Brown **

## Developer Notes    
README.md and SETUP.md template provided by [Ralph](https://github.com/pseudoralph)

Working on:

* Implementing comments on articles
