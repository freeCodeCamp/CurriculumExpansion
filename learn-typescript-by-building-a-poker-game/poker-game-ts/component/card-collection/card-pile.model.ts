import { CardSuit, CardValue  } from '../card';

export class CardPile {
    protected readonly suits = [
        CardSuit.Spade,
        CardSuit.Heart,
        CardSuit.Club,
        CardSuit.Diamond
    ];
    protected readonly values = [
        CardValue.Two,
        CardValue.Three,
        CardValue.Four,
        CardValue.Five,
        CardValue.Six,
        CardValue.Seven,
        CardValue.Eight,
        CardValue.Nine,
        CardValue.Ten,
        CardValue.Jack,
        CardValue.Queen,
        CardValue.King,
        CardValue.Ace
    ];

    constructor() { }
}
