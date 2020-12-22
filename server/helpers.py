import os
from flask import Flask
from flask import jsonify
import subprocess
import requests
from collections import namedtuple
import json
import urllib.request

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
	cookies_dictonairy  = session_cookies.get_dict()
#	object = namedtuple("DataObject", cookies_dictonairy.keys())(*cookies_dictonairy.values())
#	json_result = json.dumps(object, separators=(',', ':'))
	result = { 'data': str(cookies_dictonairy) }
	return jsonify(result)

def get_certificate(domain):
	command = "echo | openssl s_client -servername {} -connect {}:443 2>/dev/null | openssl x509 -text".format(domain, domain)
	subprocess1 = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
	result = subprocess1.stdout.read()
	data = {'data': str(result)}
	return jsonify(data)

def get_ns_lookup(domain):
	command = "nslookup " + domain 
	subprocess1 = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
	result = subprocess1.stdout.read()
	data = {'data': str(result)}
	return jsonify(data)

def get_scraped_website(domain):
	url = 'https://{}'.format(domain)
	webpage = urllib.request.urlopen(url)
	DOM = webpage.read()
	webpage.close()
	html = str(DOM)
	data = {'data': str(html)}
	return jsonify(data)
