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
    'jack': 10,
    'queen': 10,
    'king': 10,
    'ace': 11,
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
        self.hand = []

    def check_bank(self):
        print(self.bank)


class Dealer:
    def __init__(self):
        self.deck = Deck()
        self.hand = []

    def shuffle_deck(self):
        shuffle(self.deck.all_cards)

    def deal_one(self):
        return self.deck.all_cards.pop()


class Game:
    current_turn = ''

    def __init__(self, player):
        self.player = Player(player)
        self.dealer = Dealer()
        self.commands = {
            "Hit Me": self.dealer.deal_one(),
            "Stay": False,
            "Check Bank": self.player.check_bank(),
        }

    def change_turn(self):
        if self.current_turn == self.player:
            self.current_turn = self.dealer
            print("It is now the dealer's turn")
            self.player.hand = []
        else:
            self.current_turn = self.player
            print("It's now your turn")
            self.dealer.hand = []

    def deal_cards(self):
        if len(self.current_turn.hand) < 1:
            self.current_turn.hand.append(self.dealer.deal_one())
            self.current_turn.hand.append(self.dealer.deal_one())
        else:
            self.current_turn.hand.append(self.dealer.deal_one())
