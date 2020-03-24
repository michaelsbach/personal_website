# Michael Schwarzbach's Personal Website
### Built with React.js, Flask, nginx, DigitalOcean, & Travis CI

#### Showcases the following:
* Personal Information
* Projects (past, present, short-term future)
* Learning in Public

#### to run:
* automatic: `./run.sh`
* manual:
  * `cd react_frontend`
  * `npm run build`
  * `cd ../flask_backend`
  * (optional) Create and run a virtualenv
  * `flask run`

  
* deployed version available [here](https://www.michaelsc)


 #### TODO:
  * MVP
    * implement Docker CI Pipeline
    * add "Learning" section
    * deploy server so /api routes can be hit
    * work with Travis CI
    * fiddle with CSS for < 600px- fix:
      * intro text size
      * project card wrappings)
    * set up more test suites

  * Aesthetic
    * SVG animation on home screen
  


  #### DONE:
  * put information on homepage
  * set up components/views for "contact" page (need icons for GTHB, LNKDN, GML)
  * set up components/views for "projects" page (should use React Cards, grab data from the projects.yaml)
  * overhaul nav bar
  * set up nginx & DigitalOcean hosting