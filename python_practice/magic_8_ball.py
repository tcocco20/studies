'''
Theo Cocco
Magic 8-Ball practice Lab
last updated: 08/26/2021
'''

from random import choice


#Version 1, Simple 8 ball response

'''
choices = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes	",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
]

input("Ask the 8 Ball any question: ")

print(choice(choices))
'''

#Version 2 While loop to keep asking

'''
choices = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes	",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
]

question = input('Ask the magic 8 ball any question or type "done" to quit: ')

while question != "done":
	print(choice(choices))
	
	question = input('Ask the magic 8 ball any question or type "done" to quit: ')
'''

#Version 3 OOP version

class Magic_8_ball:
	def __init__(self):
		pass
		
	choices = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes	",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
	]
	
	def ask_question(self):
		return choice(self.choices)

m8ball = Magic_8_ball()

while True:		
	question = input('Ask the Magic 8-Ball anything or type "done" to quit: ')
	
	if question == 'done':
		print('GoodBye')
		break
	else:
		print(m8ball.ask_question())
