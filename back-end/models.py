from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50))
    productType = db.Column(db.String(50))
    type = db.Column(db.String(50))
    price = db.Column(db.Float)
    details = db.Column(db.String(200))
    image1 = db.Column(db.String(200))
    image2 = db.Column(db.String(200))
    inCart = db.Column(db.Boolean, default=False)
    QTY = db.Column(db.Integer)

class Slide(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bgImg = db.Column(db.String(200))
    popImg = db.Column(db.String(200))
    title = db.Column(db.String(50))
    secondaryTitle0 = db.Column(db.String(255))
    secondaryTitle1 = db.Column(db.String(255))
    paragraph0 = db.Column(db.String(200))
    paragraph1 = db.Column(db.String(200))



