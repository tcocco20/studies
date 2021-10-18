from random import randint

def gen_squares(n):
  for x in range(n):
    yield x ** 2
    
for x in gen_squares(10):
  print(x)
  
def gen_rand(l, h, n):
  for x in range(n):
    yield randint(l, h)

for x in gen_rand(1, 9, 5):
  print(x)
  
s = 'hello'

iter_s = iter(s)

for x in iter_s:
  print(x)