from flask import Flask
from flask_cors import CORS
import helpers
app = Flask(__name__)
cors = CORS(app)

@app.route("/api/whois")
def GetWhoIs():
	return(helpers.get_who_is("mmcrypto.org"))

@app.route("/api/cookies")
def GetCookies():
	return(helpers.get_cookies("https://google.com"))

if __name__ == '__main__':
	app.run(host='0.0.0.0')
