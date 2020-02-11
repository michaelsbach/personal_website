from flask import Flask
from flask import request
from flask import render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html", token="Hello Friend")

'''
    display_projects:
        method that renders React front-end. 
        The front end will query the backend at /api/projects 
            and populate view of projects with the fetched data

'''
def display_projects():
    return 'List of Projects'



@app.route('/projects/', methods=['GET', 'POST'])
def projects():
    if request.method == 'GET':
        return display_projects()
    else:
        return add_project()



@app.route('/projects/<int:project_id>', methods=['GET', 'PUT', 'PATCH', 'DELETE'])
def project(project_id):
    return f'Details about project #{project_id}'
#    return render_template('project.html', project=project)


'''
TODO METHOD: OPTIONAL
    add_project:
        would need a login system for this. 
        Needs to authenticate me first. Should look into google OAuth.
        method that renders React front-end. 
        The front end will show a form so that a new project (with picture & info) can be added. 
        Form data will be POSTed to /projects/

'''
def add_project():
    return '404 add_project not implemented'

#@app.route('/')