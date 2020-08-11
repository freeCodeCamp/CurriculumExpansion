import { CardInterface, CardSuit, CardValue } from './card.interface';

export class Card implements CardInterface {
    readonly suit: CardSuit;
    readonly value: CardValue;

    constructor({ suit, value }: CardInterface) {
        this.suit = suit;
        this.value = value;
    }
}
