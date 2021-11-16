from turtle import Turtle

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]
MOVE_DISTANCE = 20
UP = 90
DOWN = 270
LEFT = 180
RIGHT = 0

class Snake():
  def __init__(self):
    self.segments = []
    self.create_snake()
    self.head = self.segments[0]
    
  def create_snake(self):
    for x in STARTING_POSITIONS:
      t = Turtle(shape='square')
      t.color('white')
      t.penup()
      t.goto(x)
      self.segments.append(t)
      
  def move(self):
    for s in range(len(self.segments) - 1, 0, -1):
      x = self.segments[s - 1].xcor()
      y = self.segments[s - 1].ycor()
      self.segments[s].goto(x, y)
    self.head.forward(MOVE_DISTANCE)
  
  def up(self):
    if self.head.heading() != DOWN:
      self.head.setheading(90)
    
  def down(self):
    if self.head.heading() != UP:
      self.head.setheading(270)
    
  def left(self):
    if self.head.heading() != RIGHT:
      self.head.setheading(180)
    
  def right(self):
    if self.head.heading() != LEFT:
      self.head.setheading(0)

