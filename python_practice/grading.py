'''
Theo Cocco
Grading Lab
Last Updated: 08/20/2021
'''

# Version 1 Simple Grade conversion

'''
try:
	score = int(input('Enter the numeric score you got: '))
except:
	print('Please enter a number and try again')

def get_grade(score):
	if score >= 90:
		return "A"
	elif score >= 80:
		return "B"
	elif score >= 70:
		return "C"
	elif score >= 60:
		return "D"
	else:
		return "F"

print(f'Your grade is {get_grade(score)}')
'''

# Version 2 Adding + or -

'''
try:
	score = int(input('Enter the numeric score you got: '))
except:
	print('Please enter a number and try again')

def get_grade(score):
	if score >= 90:
		return "A"
	elif score >= 80:
		return "B"
	elif score >= 70:
		return "C"
	elif score >= 60:
		return "D"
	else:
		return "F"

def get_decorator(score):
	if score % 10 <= 3:
		return "-"
	elif score % 10 >= 7:
		return "+"
	else:
		return ""

print(f'Your grade is {get_grade(score)}{get_decorator(score)}')
'''

# OOP Version

class Grade:
  def __init__(self, score):
    self.score = score
    
  def get_grade(self, score):
    if score >= 90:
      return "A"
    elif score >= 80:
      return "B"
    elif score >= 70:
      return "C"
    elif score >= 60:
      return "D"
    else:
      return "F"
    
  def get_decorator(self, score):
    if score % 10 <= 3:
      return "-"
    elif score % 10 >= 7:
      return "+"
    else:
      return ""
    
  def __str__(self):
  			return f'Your grade is {self.get_grade(self.score)}{self.get_decorator(self.score)}'

try:
	score = int(input('Enter the numeric score you got: '))
	grade = Grade(score)

	print(grade)
	
except:
	print('Please try again and enter a number this time')



