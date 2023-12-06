from app import app, db
from flask import jsonify, request
from app.models import Product, Slide

@app.route('/products', methods=['GET', 'POST'])
def manage_products():
    if request.method == 'GET':
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
    
    elif request.method == 'POST':
        # Add a new product
        data = request.json  
        new_product = Product(
            category=data['category'],
            productType=data['productType'],
            type=data['type'],
            price=data['price'],
            details=data['details'],
            image1=data['image1'],
            image2=data['image2'],
            inCart=data['inCart'],
            QTY=data['QTY']
        )
        db.session.add(new_product)
        db.session.commit()

        return jsonify({'message': 'Product added successfully'}), 201


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


            updated_product = {
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
            }

            return jsonify({'message': 'Product updated successfully', 'product': updated_product})
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