from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={
    r"/products/*": {"origins": "http://localhost:5173"},
    r"/slides/*": {"origins": "http://localhost:5173"}},
    allow_headers=["Content-Type", "Authorization"],
    supports_credentials=True,
    methods=["GET", "POST", "PUT", "DELETE"]
)



app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db' 
app.config['CORS_SUPPORTS_CREDENTIALS'] = True

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
    return jsonify(product_list)


@app.route('/products/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    product = Product.query.get(product_id)
    if product:
        return jsonify({
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
    else:
        return jsonify({'error': 'Product not found'}), 404
    


@app.route('/products/<int:product_id>', methods=['PUT'])
def update_in_cart(product_id):
    with app.app_context():
        product = Product.query.get(product_id)
        if product:
            data = request.get_json()

            if 'inCart' in data:
                product.inCart = bool(data['inCart'])
            
            product.QTY = data.get('QTY', product.QTY)

            db.session.add(product) 
            db.session.commit()
            return jsonify({'message': 'Product updated successfully'})
        else:
            return jsonify({'error': 'Product not found'}), 404


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
            'secondaryTitle0': [slide.secondaryTitle0],
            'secondaryTitle1': [slide.secondaryTitle1],
            'paragraph0': [slide.paragraph0],
            'paragraph1': [slide.paragraph1],
        })
    return jsonify(slide_list)




# Ensure that the application context is pushed manually
with app.app_context():
    db.create_all()  # Create tables before running the app

if __name__ == '__main__':
    app.run(debug=True)
