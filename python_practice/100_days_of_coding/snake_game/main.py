from turtle import Screen, Turtle
import time

screen = Screen()
screen.setup(600, 600)
screen.bgcolor('black')
screen.title('Snek Game')
screen.tracer(0)

s1 = Turtle(shape='square')
s2 = Turtle(shape='square')
s3 = Turtle(shape='square')

segments = [s1, s2, s3]


x = 0

for t in segments:
  t.color('white')
  t.penup()
  t.goto(x,0)
  x -= 20

screen.update()

game_on = True

while game_on:
  screen.update()
  time.sleep(0.1)
  
  for s in range(len(segments) - 1, 0, -1):
    x = segments[s - 1].xcor()
    y = segments[s - 1].ycor()
    segments[s].goto(x, y)
  segments[0].forward(20)
  

screen.exitonclick()