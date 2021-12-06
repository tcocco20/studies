import requests
from random import choice

term = input('What kind of joke would you like to hear? ')

res = requests.get('https://icanhazdadjoke.com/search',
                   headers={'Accept': 'application/json'}, params={'term': term}).json()

joke_list = res['results']

print("Sorry no jokes") if not joke_list else print(choice(joke_list)['joke'])
