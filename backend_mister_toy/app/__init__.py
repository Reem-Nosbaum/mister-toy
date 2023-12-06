from flask import Flask
from .routes import app, db 
import os

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")   

    db.init_app(app)

    # Import and register your blueprints
    from routes import bp as routes_bp
    app.register_blueprint(routes.app)

    return app
