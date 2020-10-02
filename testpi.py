import os
stream = os.popen('pi 10000')
output = stream.read()
print(output)
