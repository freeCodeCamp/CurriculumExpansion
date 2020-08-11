export enum CardValue {
    Two = 2,
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
    King,
    Ace
}

export enum CardSuit {
    Spade,
    Heart,
    Club,
    Diamond
}

export interface CardInterface {
    suit: CardSuit;
    value: CardValue;
}

