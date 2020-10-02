#!/usr/bin/python3
# namelookup.py - Program to display name statistics
# James Skon, 2020
import os
import cgi
import cgitb
cgitb.enable()


def print_header():
    print ("Content-type:text/html\n\n")

def main():
  print_header()

  form = cgi.FieldStorage()
  if (form.getvalue("digits")):
    digits=form.getvalue("digits")

    width=100
    stream = os.popen('pi '+digits)
    output = stream.read()
    l=len(output)
    lines=l//width
    for i in range(lines+1):
        print(output[i*width:i*width+width])


  else:
    print("Error in submission")

main()
