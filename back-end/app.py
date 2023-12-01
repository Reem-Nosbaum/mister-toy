from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db'  # SQLite database
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50))
    productType = db.Column(db.String(50))
    type = db.Column(db.String(50))
    price = db.Column(db.Float)
    details = db.Column(db.String(200))
    image1 = db.Column(db.String(200))
    image2 = db.Column(db.String(200))
    inCart = db.Column(db.Boolean)
    QTY = db.Column(db.Integer)

class Slide(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bgImg = db.Column(db.String(200))
    popImg = db.Column(db.String(200))
    title = db.Column(db.String(50))
    secondaryTitle1 = db.Column(db.String(50))
    secondaryTitle2 = db.Column(db.String(50))
    paragraph1 = db.Column(db.String(200))
    paragraph2 = db.Column(db.String(200))



@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = []
    for product in products:
        product_list.append({
            'id': product.id,
            'category': product.category,
            'productType': product.productType,
            'type': product.type,
            'price': product.price,
            'details': product.details,
            'image1': product.image1,
            'image2': product.image2,
            'inCart': product.inCart,
            'QTY': product.QTY
        })
    return jsonify({'products': product_list})

@app.route('/slides', methods=['GET'])
def get_slides():
    slides = Slide.query.all()
    slide_list = []
    for slide in slides:
        slide_list.append({
            'id': slide.id,
            'bgImg': slide.bgImg,
            'popImg': slide.popImg,
            'title': slide.title,
            'secondaryTitle': [slide.secondaryTitle1, slide.secondaryTitle2],
            'paragraph': [slide.paragraph1, slide.paragraph2],
        })
    return jsonify({'slides': slide_list})

# Ensure that the application context is pushed manually
with app.app_context():
    db.create_all()  # Create tables before running the app

if __name__ == '__main__':
    app.run(debug=True)
