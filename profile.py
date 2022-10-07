import random

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""
    
    return render_template("index.html")


@app.route('/api/profile', methods=['POST'])
def profile():
    """Return results from profile form."""
    
    # print(request.json)
    fullname = request.json['name']
    # TODO: get the values from the rest of the form
    customer_age = request.json['age']
    customer_ocupation = request.json['occupation']
   
    # Add them to jsonify
    # print(jsonify({'fullname': fullname, 'customer_age' : customer_age, 'customer_ocupation': customer_ocupation})
# )
    return jsonify({'fullname': fullname, 'customer_age' : customer_age, 'customer_ocupation': customer_ocupation})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
