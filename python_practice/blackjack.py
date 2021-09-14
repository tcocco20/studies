from random import shuffle
suits = ('Hearts', 'Diamonds', 'Clubs', 'Spades')
ranks = ('Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
         'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace',)

values = {
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'jack': 11,
    'queen': 12,
    'king': 13,
    'ace': 14,
}


class Card:
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
        self.value = values[rank.lower()]

    def __str__(self):
        return f'{self.rank} of {self.suit}'


class Deck:
    def __init__(self):
        self.all_cards = []

        for suit in suits:
            for rank in ranks:
                self.all_cards.append(Card(suit, rank))

    def shuffle_deck(self):
        shuffle(self.all_cards)

    def deal_one(self):
        return self.all_cards.pop()


class Bank:
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance - amount > 0:
            self.balance -= amount
            return amount
        else:
            print('You are out of money')
            return False

    def __str__(self):
        return f'You have ${self.balance} left'


class Player:
    def __init__(self, name, amount=1000):
        self.name = name
        self.bank = Bank(amount)
        
class Dealer:
    def __init__(self):
      self.deck = Deck()
