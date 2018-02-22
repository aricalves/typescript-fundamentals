/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]): void {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export class Dealer {
  deck: Card[] = []
  constructor() {
    [0, 1, 2, 3]
      .forEach(suit => {
        for (let num:number = 0; num < 13; num++) {
          this.deck.push([suit, num])
        }
      })
    shuffleArray(this.deck)
  }

  readCard (card: Card): string {
    const [suit, cardNumber] = card
    return `${CardNumber[cardNumber]} of ${Suit[suit]}`
  }

  getLength (): number {
    return this.deck.length
  }

  dealHand(numCards: number): Card[] {
    if (numCards < 0) throw new Error('Cannot ask for negative cards')
    if (numCards > this.getLength()) throw new Error(`Cannot deal more than ${this.getLength()} cards`)
    return this.deck.splice(this.getLength() - numCards, numCards)
  }
}

export type Card = [Suit, CardNumber]

export enum CardNumber {
  Ace,
  Deuce,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}

export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
