from turtle import Screen
from snake import Snake
import time

screen = Screen()
screen.setup(600, 600)
screen.bgcolor('black')
screen.title('Snek Game')
screen.tracer(0)

snake = Snake()

game_on = True

while game_on:
  screen.update()
  time.sleep(0.1)
  
  snake.move()
  

screen.exitonclick()