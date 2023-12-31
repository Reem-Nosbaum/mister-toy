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


@app.route('/slides', methods=['GET', 'POST'])
def manage_slides():
    if request.method == 'GET':
        slides = Slide.query.all()
        slide_list = []
        for slide in slides:
            slide_list.append({
                'id': slide.id,
                'bgImg': slide.bgImg,
                'popImg': slide.popImg,
                'title': slide.title,
                'secondaryTitle0': slide.secondaryTitle0,
                'secondaryTitle1': slide.secondaryTitle1,
                'paragraph0': slide.paragraph0,
                'paragraph1': slide.paragraph1,
            })
        return jsonify(slide_list)

    elif request.method == 'POST':
        # Add a new slide
        data = request.json
        new_slide = Slide(
            bgImg=data['bgImg'],
            popImg=data['popImg'],
            title=data['title'],
            secondaryTitle0=data['secondaryTitle0'],
            secondaryTitle1=data['secondaryTitle1'],
            paragraph0=data['paragraph0'],
            paragraph1=data['paragraph1'],
        )
        db.session.add(new_slide)
        db.session.commit()

        return jsonify({'message': 'Slide added successfully'}), 201


@app.route('/slides/<int:slide_id>', methods=['GET', 'PUT'])
def update_slide(slide_id):
    slide = Slide.query.get(slide_id)
    
    if slide:
        if request.method == 'GET':
            # Return the details of a specific slide
            return jsonify({
                'id': slide.id,
                'bgImg': slide.bgImg,
                'popImg': slide.popImg,
                'title': slide.title,
                'secondaryTitle0': slide.secondaryTitle0,
                'secondaryTitle1': slide.secondaryTitle1,
                'paragraph0': slide.paragraph0,
                'paragraph1': slide.paragraph1,
            })
        
        elif request.method == 'PUT':
            # Update the slide
            data = request.json
            
            # Update slide properties based on the received data
            slide.bgImg = data.get('bgImg', slide.bgImg)
            slide.popImg = data.get('popImg', slide.popImg)
            slide.title = data.get('title', slide.title)
            slide.secondaryTitle0 = data.get('secondaryTitle0', slide.secondaryTitle0)
            slide.secondaryTitle1 = data.get('secondaryTitle1', slide.secondaryTitle1)
            slide.paragraph0 = data.get('paragraph0', slide.paragraph0)
            slide.paragraph1 = data.get('paragraph1', slide.paragraph1)

            # Commit changes to the database
            db.session.add(slide)
            db.session.commit()

            # Return the updated slide
            updated_slide = {
                'id': slide.id,
                'bgImg': slide.bgImg,
                'popImg': slide.popImg,
                'title': slide.title,
                'secondaryTitle0': slide.secondaryTitle0,
                'secondaryTitle1': slide.secondaryTitle1,
                'paragraph0': slide.paragraph0,
                'paragraph1': slide.paragraph1,
            }

            return jsonify({'message': 'Slide updated successfully', 'slide': updated_slide})

    else:
        return jsonify({'error': 'Slide not found'}), 404
