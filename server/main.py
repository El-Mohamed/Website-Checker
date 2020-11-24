from flask import Flask
import helpers

app = Flask(__name__)

@app.route("/")
def HomePage():
	return(helpers.get_who_is("mmcrypto.org"))


if __name__ == '__main__':
	app.run(host='0.0.0.0')
