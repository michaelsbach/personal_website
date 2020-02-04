from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Welcome to Michael Schwarzbach\'s website'
    #return flask.render_template("index.html", token="Hello Friend")

@app.route('/projects/', methods=['GET', 'POST'])
def projects(request):
    if request.method == 'POST':
        return add_project()
    elif request.method == 'GET':
        return display_projects()


def display_projects():
    return 'List of Projects'

def add_project():
    #TODO: add project info to DB
    return 'success or fail?'

@app.route('/projects/<int:project_id>', methods=['GET', 'PUT', 'PATCH', 'DELETE'])
def project(project_id):
    return f'Details about project #{project_id}'
#    return render_template('project.html', project=project)



#@app.route('/')