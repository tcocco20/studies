'''
Theo Cocco
Random Emoticon Generator
Last updated: 08/27/2021
'''

from random import choice

#Version 1 simple lists and 1 emoticon and concatenation

"""

eyes = [':', '=', ';',]

noses = ["-", ">", "'"]

mouths = [")", "(", "[", "]", "o", "D", "O", "P", "d",]

print(choice(eyes) + choice(noses) + choice(mouths))
"""

#Version 2 while loop to generate 5 emoticons

'''
x = 0

eyes = [':', '=', ';',]

noses = ["-", ">", "'"]

mouths = [")", "(", "[", "]", "o", "D", "O", "P", "d",]

while x < 5:
	print(choice(eyes) + choice(noses) + choice(mouths))
	x += 1
'''

# Version 3 Vertical Emoticons

'''
eye_choices = ["^", "*", "o", "$", "-"]

mouths = ["_", ".", ","]

eyes = choice(eye_choices)

print(eyes + choice(mouths) + eyes)
'''	

#OOP

class Horizontal_emoticon:
	pass

class Vertical_emoticon:
	pass
	
class Emoticon_Factory:
