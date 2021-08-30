'''
Theo Cocco
Random Emoticon Generator
Last updated: 08/30/2021
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
	def __init__(self):
		pass
	
	face = {'eyes': [':', '=', ';',],
		'noses': ["-", ">", "'"],
		'mouths': [")", "(", "[", "]", "o", "D", "O", "P", "d",],
		}
	
	def set_eyes(self):
		self.eyes = choice(self.face['eyes'])
	
	def set_nose(self):
		self.nose = choice(self.face['noses'])
	
	def set_mouth(self):
		self.mouth = choice(self.face['mouths'])
	
	def __str__(self):
		self.set_eyes()
		self.set_nose()
		self.set_mouth()
		
		return self.eyes + self.nose + self.mouth
		
	
	
	
	

class Vertical_emoticon:
	def __init__(self):
		pass
	
	face = {
		"eye_choices" : ["^", "*", "o", "$", "-"],
		"mouths" : ["_", ".", ","],
	}
	
	def set_eyes(self):
		self.eyes = choice(self.face["eye_choices"])
	
	def set_mouth(self):
		self.mouth = choice(self.face["mouths"])
	
	def __str__(self):
		self.set_eyes()
		self.set_mouth()
		
		return self.eyes + self.mouth + self.eyes
	
class Emoticon_Factory:
	pass

