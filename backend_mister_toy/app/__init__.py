from flask import Flask
import os
from routes import app, db

from models import db  

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")   

    db.init_app(app)

    # Import and register your blueprints
    from routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    return app
