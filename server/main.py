from flask import Flask
from flask_cors import CORS
import helpers
app = Flask(__name__)
cors = CORS(app)

@app.route("/api/whois")
def HomePage():
	return(helpers.get_who_is("mmcrypto.org"))


if __name__ == '__main__':
	app.run(host='0.0.0.0')
