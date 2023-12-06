
import os

from flask_cors import CORS
from routes import app, db

CORS(app, resources={
    r"/products/*": {"origins": "http://localhost:5173"},
    r"/slides/*": {"origins": "http://localhost:5173"}},
    allow_headers=["Content-Type", "Authorization"],
    supports_credentials=True,
    methods=["GET", "POST", "PUT", "DELETE"]
)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")   


app.config['CORS_SUPPORTS_CREDENTIALS'] = True

db.init_app(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")


app.config['CORS_SUPPORTS_CREDENTIALS'] = True

db.init_app(app)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)