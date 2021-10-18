import turtle as t

colors = ['red', 'orange', 'purple', 'blue', 'green', 'yellow']

s = t.Screen()
s.setup(width=500, height=400)

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
  
s.exitonclick()


  