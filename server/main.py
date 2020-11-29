from flask import Flask
from flask_cors import CORS
import helpers
app = Flask(__name__)
cors = CORS(app)

@app.route("/api/whois/<target>")
def GetWhoIs(target):
	return(helpers.get_who_is(target))

@app.route("/api/cookies/<target>")
def GetCookies(target):
	return(helpers.get_cookies("https://" + target))

@app.route("/api/certificate/<target>")
def GetCertificate(target):
        return(helpers.get_certificate(target))


if __name__ == '__main__':
	app.run(host='0.0.0.0')
