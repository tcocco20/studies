from turtle import Screen, Turtle

screen = Screen()
screen.setup(600, 600)
screen.bgcolor('black')
screen.title('Snek Game')

s1 = Turtle(shape='square')
s2 = Turtle(shape='square')
s3 = Turtle(shape='square')

turts = [s1, s2, s3]

x = 0

for t in turts:
  t.color('white')
  t.goto(x,0)
  x -= 20

screen.exitonclick()