from flask import Flask, request, render_template
import json, yaml, multiprocessing
#import gunicorn.app.base
#from gunicorn.six import iteritems

def number_of_workers():
    return (multiprocessing.cpu_count() * 2) + 1

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
            return json.dumps(yaml.safe_load(stream)), 200, {'Content-Type': 'application/json'}
        except yaml.YAMLError as err:
            return json.dumps({"ERROR": err}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0")


# new
#class StandaloneApplication(gunicorn.app.base.BaseApplication):
#
#    def __init__(self, app, options=None):
#        self.options = options or {}
#        self.application = app
#        super(StandaloneApplication, self).__init__()
#
#    def load_config(self):
#        config = dict([(key, value) for key, value in iteritems(self.options)
#                       if key in self.cfg.settings and value is not None])
#        for key, value in iteritems(config):
#            self.cfg.set(key.lower(), value)
#
#    def load(self):
#        return self.application
#
#
#if __name__ == '__main__':
#    options = {
#        'bind': '%s:%s' % ('127.0.0.1', '8080'),
#        'workers': number_of_workers(),
#    }
#    # Modification 3: pass Flask app instead of handler_app
#    StandaloneApplication(app, options).run()
