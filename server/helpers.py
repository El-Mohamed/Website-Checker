import os
from flask import Flask
from flask import jsonify
import subprocess



def get_who_is(domain):
	command = "whois {}".format(domain)
	subprocess1 = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
	who_is_output = subprocess1.stdout.read()
	data = {'data': str(who_is_output)}
	return jsonify(data)
