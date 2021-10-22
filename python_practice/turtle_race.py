import turtle as t
from random import randint

colors = ['red', 'orange', 'purple', 'blue', 'green', 'yellow']
race_on = False

s = t.Screen()
s.setup(width=500, height=400)
user_bet = s.textinput(title='Make your bet',
                       prompt='Which turtle will win the race? ').lower()

r = t.Turtle(shape='turtle')
o = t.Turtle(shape='turtle')
p = t.Turtle(shape='turtle')
b = t.Turtle(shape='turtle')
g = t.Turtle(shape='turtle')
y = t.Turtle(shape='turtle')

turtles = [r, o, p, b, g, y]

i = 0
c = -90
for turtle in turtles:
    turtle.penup()
    turtle.color(colors[i])
    turtle.goto(x=-230, y=c)
    c += 30
    i += 1

if user_bet:
    race_on = True
  
while race_on:
  for turtle in turtles:
    if turtle.xcor() > 230:
      race_on = False
      winning_color = turtle.pencolor()
      if winning_color == user_bet:
        print(f"You've won! The {winning_color} turtle is the winner!")
        
      else:
        print(f"You lost =( The {winning_color} turtle is the winner!")
        
        
    rand_dist = randint(0, 10)
    turtle.forward(rand_dist)

s.exitonclick()


