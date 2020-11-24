from flask import Flask
import helpers

app = Flask(__name__)

@app.route("/")
def HomePage():
	print(helpers.get_who_is("mmcrypto.org"))
	return "hallo"

if __name__ == '__main__':
	app.run(host='0.0.0.0')
