implementing comments on articles

investigating API calls -X (desired info not found)

figuring out database author/article integration -X (canceled)

Actual New York Times Site Includes:
* Article headlines
* Links to full articles
* Navigation bar
* the site is comprised of:
  * Front page
    * top stories - (most interaction/recent?)
    * latest update - a la article date
    * links to different sections (world/health/science/sports/etc.)
      * many Articles
        * blurb about the article/story
        * section relevance (world/health/science/sports)
        * paragraphs -(check)
        * title -(check)
        * date -(check)
        * author -(check)
        * occasional picture
        * author link
        * links to talk about article on social medias (like the hashtag on twitter)
        * occasional video
        * videos and pictures have blurbs about them
        * separated into story sections with sub titles
        * comments (moderated and stored by the site owner)
          * comments can have replies
            * replies can have replies
      * top stories
      * query by sub-section - nyt.com/sections/world/africa?action=...
  * Authors
    * first/last name
    * has many articles
    * bio
    * picture
* a paper is every article released on a specific day, with fewer layers of specificity (sub sections mostly removed)


# Known Bugs

* Bootstrap not functioning

# NewYorkTimesClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
