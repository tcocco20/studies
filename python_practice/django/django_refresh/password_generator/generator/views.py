from django.shortcuts import render
import random

# Create your views here.

def home(request):
  return render(request, 'generator/home.html')

def password(request):
  characters = list('abcdefghijklmnopqrstuvwxyz')
  
  length = 10
  
  the_password = ''
  
  for x in range(length):
    the_password = random.choice(characters)
  
  return render(request, 'generator/password.html', {'password':the_password})