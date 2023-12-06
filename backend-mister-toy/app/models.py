from flask_sqlalchemy import SQLAlchemy
from app import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50))
    productType = db.Column(db.String(50))
    type = db.Column(db.String(50))
    price = db.Column(db.Float)
    details = db.Column(db.String(500))
    image1 = db.Column(db.String(500))
    image2 = db.Column(db.String(500))
    inCart = db.Column(db.Boolean, default=False)
    QTY = db.Column(db.Integer)

class Slide(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bgImg = db.Column(db.String(500))
    popImg = db.Column(db.String(500))
    title = db.Column(db.String(100))
    secondaryTitle0 = db.Column(db.String(500))
    secondaryTitle1 = db.Column(db.String(500))
    paragraph0 = db.Column(db.String(500))
    paragraph1 = db.Column(db.String(500))