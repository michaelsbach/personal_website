import os, sys, json
import pytest

sys.path.insert(0, '..')
sys.path.insert(0, '.')
# import the Flask module
from flask_backend.app import app

#indicate tests are running
app.testing = True

#generate a test client
app = app.test_client()

def test_index_response():
  response = app.get('/')
  assert(response.status_code == 200)

def test_project_data():
  response = app.get('/api/projects/')
  assert( response.status_code == 200 )
  assert( response.content_type == 'application/json' )
  keys = {'title', 'image', 'url', 'description', 'date', 'tech'}
  data = response.get_data(as_text=True) 
  for project in json.loads(data)['projects']:
    assert( keys <= project.keys() ) 

