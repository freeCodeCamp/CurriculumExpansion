import { CardPile } from './card-pile.model';
import { Card, CardSuit, CardValue } from '../card';

type Cache = {
    [key in CardSuit]: CardValue[]
};

export class Deck extends CardPile {
    private static self: Deck;
    cache: Cache = {
        [CardSuit.Spade]: [],
        [CardSuit.Heart]: [],
        [CardSuit.Club]: [],
        [CardSuit.Diamond]: []
    };
    count: number = 0;

    constructor() {
        super();
    };

    // Singleton
    public static get instance() {
        return this.self || (this.self = new this());
    };

    createCardHand(amount): Card[] {
        let cards: Card[] = [];

        while (amount > 0) {
            let card: Card = this.generateRandom();
            let { suit, value } = card;

            this.count++;
            this.cache[suit].push(value);
            cards.push(card);
            amount--;
        }

        if (this.count >= 30) {
            this.reset();
        }

        return cards;
    }

    reset() {
        // Reset cache object
        Object.keys(this.cache).forEach(key => {
            this.cache[key] = [];
        });
        this.count = 0;
    }

    private generateRandom(): Card {
        let suit: CardSuit;
        let value: CardValue;

        do {
            suit = this.getRandomElement<CardSuit>(this.suits);
            value = this.getRandomElement<CardValue>(this.values);
        } while (this.cache[suit].includes(value));

        return new Card({ suit, value })
    }

    private getRandomElement<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}
