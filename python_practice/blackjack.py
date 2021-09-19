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
            print("You don't have enough money")
            return False

    def __str__(self):
        return f'You have ${self.balance} left'


class Player:
    def __init__(self, name, amount=1000):
        self.name = name
        self.bank = Bank(amount)
        self.hand = []

    def check_bank(self):
        return self.bank

    def bet(self, amount):
        return self.bank.withdraw(amount)

    def add_winnings(self, amount):
        self.bank.deposit(amount)

    def get_hand_value(self):
        sum = 0

        for card in self.hand:
            sum += card.value

        return sum


class Dealer:
    def __init__(self):
        self.deck = Deck()
        self.hand = []

    def shuffle_deck(self):
        shuffle(self.deck.all_cards)

    def deal_one(self):
        return self.deck.all_cards.pop()

    def get_hand_value(self):
        sum = 0

        for card in self.hand:
            sum += card.value

        return sum


class Game:
    current_turn = ''

    def __init__(self, player):
        self.player = Player(player)
        self.dealer = Dealer()
        self.current_turn = self.player

    def change_turn(self):
        if self.current_turn == self.player:
            self.current_turn = self.dealer
            self.deal_cards()
            print("It is now the dealer's turn")
        else:
            self.current_turn = self.player
            print("It's now your turn")
            self.reset_hands()

    def reset_hands(self):
        self.dealer.hand = []
        self.player.hand = []

    def deal_cards(self):
        if len(self.current_turn.hand) < 1:
            self.current_turn.hand.append(self.dealer.deal_one())
            self.current_turn.hand.append(self.dealer.deal_one())
        else:
            self.current_turn.hand.append(self.dealer.deal_one())


while True:
    play = input("Would you like to start a new game of blackjack? (y/n): ")
    if play.lower() == 'y':

        new_game = Game(input("What is your name? "))

        new_game.dealer.shuffle_deck()

        print("Your turn is first")

        while True:
            try:
                print(new_game.player.check_bank())
                bet = new_game.player.bet(
                    int(input('How much would you like to bet? ')))

            except:
                print('Please enter a number!')

            if len(new_game.dealer.deck.all_cards) > 10:
                new_game.deal_cards()
            else:
                print(
                    f"We are all out of cards, your total was {new_game.player.check_bank()}")
                print("Please start a new game")
                break

            if new_game.player.hand[0].value + new_game.player.hand[1].value == 21:
                print('BlackJack!')
                new_game.player.add_winnings(bet * 2.5)
                play_again = input(
                    f"Good job, you now have {new_game.player.check_bank()}, would you like to play again? (y/n): ")
                if play_again == "y":
                    new_game.reset_hands()
                    continue
                else:
                    print('Good Bye!')
                    break

            else:
                while True:
                    player_value = new_game.player.get_hand_value()
                    if player_value == 21:
                        print("You got 21 good job.")
                        new_game.change_turn()

                    elif player_value > 21:
                        print(
                            f'Big Oof you got {player_value} thats a break buddy')
                        break
                    else:
                        print(f"You have {player_value}")
                        command = input('"Hit Me" or "Stay": ')
                        if command == 'Hit Me':
                            new_game.deal_cards()
                            continue
                        else:
                            new_game.change_turn()
                    while True:
                        dealer_value = new_game.dealer.get_hand_value()
                        print(f"The dealer has {dealer_value}")

                        if dealer_value < player_value:
                            new_game.deal_cards()
                            
                        elif dealer_value > player_value and dealer_value <= 21:
                            print(f'The dealer has {dealer_value} he wins.')

                            new_game.change_turn()
                            break

                        elif dealer_value == player_value:
                            print('You tied!')
                            new_game.player.add_winnings(bet)
                            new_game.change_turn()
                            break

                        else:
                            print(
                                f'Ooh! The dealer got {dealer_value} you win!')
                            new_game.player.add_winnings(bet * 2)
                            new_game.change_turn()
                            break
                    break
                
            play_again = input('Would you like to play again? (y/n): ')
            if play_again == 'y':
                new_game.reset_hands()
                continue
            else:
                print('It was fun! Play again soon.')
                break

    elif play == 'n':
        print("Have a good day!")
        break

    else:
        print("please make a valid entry, it's two possible letters for god's sake")
        continue
