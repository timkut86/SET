from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/SET-card')
def set_card():
    return render_template('SET-card.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')
@app.route('/products')
def products():
    return render_template('products.html')
@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/product')
def product():
    return render_template('product_page.html')

@app.route('/catalog')
def catalog():
    return render_template('catalog.html')

@app.route('/notifications')
def notifications():
    return render_template('notifications.html')

@app.route('/orders')
def orders():
    return render_template('orders.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/payment_methods')
def payment_methods():
    return render_template('payment-methods.html')

@app.route('/photos_looking')
def photos_looking():
    return render_template('photos_looking.html')

@app.route('/help')
def help():
    return render_template('help.html')

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)