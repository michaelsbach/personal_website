# Michael Schwarzbach's Personal Website
### Built with React.js, Flask, nginx, DigitalOcean, & Travis CI

#### Showcases the following:
* personal information
* projects
* creativity corner, with writings and videos


#### to run:
* npm run build in frontend folder
* create & activate a venv for the backend & "flask run"
* the goal is to have this project hosted soon using DigitalOcean


 #### TODO:
  * put information on homepage
  * set up components/views for "contact" page (need icons for GTHB, LNKDN, GML)
  * set up components/views for "projects" page (should use React Cards, grab data from the projects.yaml)
  * overhaul nav bar
    * "Michael Schwarzbach" on >800px, "Home" on <800px
    * Projects & Contact smaller
  * fix layout re-rendering column size (currently, xs={6} takes up the first 6 cols. how to take middle 6 cols?)
  * set up cool SVG animation on home screen (maybe create art to do this)
  * set up pytest suite
  * set up travis CI
  * set up nginx & DigitalOcean hosting