def solution(number):
  l = []
  s = []  
  a = 1 
  while a < number:
    l.append(a)
    a += 1

  for x in l:
    if x % 3 == 0 or x % 5 == 0:
        s.append(x)   
  return sum(s)

print(solution(10))