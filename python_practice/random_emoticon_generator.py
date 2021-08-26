'''
Theo Cocco
Random Emoticon Generator
Last updated: 08/26/2021
'''

from random import choice

#Version 1 simple lists and 1 emoticon and concatenation

eyes = [':', '=', ';',]

noses = ["-", ">", "'"]

mouths = [")", "(", "[", "]", "o", "D", "O", "P", "d",]

print(choice(eyes) + choice(noses) + choice(mouths))
