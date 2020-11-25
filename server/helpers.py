import os
from flask import Flask
from flask import jsonify
import subprocess
import requests
from collections import namedtuple

def get_who_is(domain):
	command = "whois {}".format(domain)
	subprocess1 = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
	who_is_output = subprocess1.stdout.read()
	data = {'data': str(who_is_output)}
	return jsonify(data)

def get_cookies(domain):
	a_session = requests.Session()
	a_session = requests.get(str(domain))
	session_cookies = a_session.cookies
	d  = session_cookies.get_dict()
	obj1 = namedtuple("Employee", d.keys())(*d.values())
	return jsonify(obj1)

