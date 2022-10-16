import os
from flask import Flask

app = Flask(__name__, static_folder="../react-app/build", static_url_path="/")
import requests

# Serves react app files
@app.route("/")
def index():
    return app.send_static_file("index.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
