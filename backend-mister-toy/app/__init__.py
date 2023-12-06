import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# postgres://pop_storage_user:rw0xVfrFUS14kG2uGnAnC8rOpzuIbee4@dpg-clo4mvsjtl8s73ajra9g-a.oregon-postgres.render.com/pop_storage

db = SQLAlchemy(app)

from app import routes
