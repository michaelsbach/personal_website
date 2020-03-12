from flask import Flask
from flask import request
from flask import render_template
import json
import yaml
app = Flask(__name__)
# app.config.from_object('config.ProductionConfig')
# app.config.from_object('config.TestingConfig')


@app.route('/')
def index():
    return render_template("index.html")
    #can pass a token in above statment with (..., token="content")
    #index.html can pick up the token with <script>window.token="{{token}}"</script>
    #remaining views can reference token with {{window.token}}

@app.route('/api/projects/')
def api_projects():
    with open("data/projects.yaml", 'r') as stream:
        try:
            return json.dumps(yaml.safe_load(stream))
        except yaml.YAMLError as err:
            return json.dumps({"ERROR": err})