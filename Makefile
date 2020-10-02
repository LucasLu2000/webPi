#MakeFile to build and deploy the Sample US CENSUS Name Data using ajax
# For CSC3004 Software Development
user = skon


all: PutCGI PutHTML

PutCGI:
	chmod 757 pi.py
	cp pi.py /usr/lib/cgi-bin/$(user)_pi.py

	echo "Current contents of your cgi-bin directory: "
	ls -l /usr/lib/cgi-bin/

PutHTML:
	cp pi.html /var/www/html/class/softdev/$(user)/pi/
	cp pi.css /var/www/html/class/softdev/$(user)/pi/
	cp pi.js /var/www/html/class/softdev/$(user)/pi/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(user)/pi/
