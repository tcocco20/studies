from turtle import Turtle

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]
MOVE_DISTANCE = 20

class Snake():
  def __init__(self):
    self.segments = []
    self.create_snake()
    
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
    self.segments[0].forward(MOVE_DISTANCE)

