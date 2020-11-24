import os

def get_who_is(domain):
	command = "whois {}".format(domain)
	who_is = os.system(command)



	
