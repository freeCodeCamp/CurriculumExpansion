import { Card, CardSuit, CardValue } from '../component/card';
import { PokerHand } from '../component/card-collection/hand-type.interface';

type Count = { [value in CardSuit]: number } | {};

enum Winner {
    Bot = -1,
    Draw,
    Player
}

interface ParsedHand {
    suit: Count;
    value: Count;
    sortedValue: CardValue[];
}

interface ComparedResult {
    botRank: PokerHand;
    playerRank: PokerHand;
    winnerRef: Winner
}

export class CardService {
    private static self: CardService;

    // Singleton
    public static get instance() {
        return this.self || (this.self = new this());
    };

    constructor() { }

    /**
     * @function getCompareResult
     * @private
     * @desc Compare both hands and determine the winner. The return value contains both hands for the rendering of UI
     * @param bot - The bot's poker hand
     * @param player - The player's poker hand
     * @return {Object} - Parsed hand object of bot and player, together with the winnerRef to represent the winner
     */
    getCompareResult(bot: Card[], player: Card[]): ComparedResult {
        const botHand: ParsedHand = this.parseHand(bot);
        const playerHand: ParsedHand = this.parseHand(player);
        const playerRank: PokerHand = this.getHandType(playerHand);
        const botRank: PokerHand = this.getHandType(botHand);

        let result = { playerRank, botRank };

        if (playerRank !== botRank) {
            return Object.assign(result, {
                winnerRef: playerRank > botRank ? Winner.Player : Winner.Bot
            });
        }

        let index = 0;
        const playerValues = this.constructSortedValue(playerHand.value);
        const botValues = this.constructSortedValue(botHand.value);
        // Compare each card from the beginning
        while (index < playerValues.length) {
            let playerCurr = playerValues[index];
            let botCurr = botValues[index];
            if (playerCurr !== botCurr) {
                return Object.assign(result, {
                    winnerRef: this.comparator(playerCurr, botCurr) === 1 ? Winner.Player : Winner.Bot
                });
            }
            index++;
        }

        return Object.assign(result, {
            winnerRef: Winner.Draw
        });
    }

    /**
     * @function getHandType
     * @private
     * @desc Calculate poker hand type
     * @param {Card[]} hand - The card array to be calculated
     * @return {PokerHand}
     */
    private getHandType({ sortedValue: values, suit, value }): PokerHand {
        const isFlush = this.isFlush(suit);
        if (this.isStraight(values) && isFlush) {
            return PokerHand.StraightOrRoyalFlush;
        } else if (this.isWheel(values) && isFlush) {
            return PokerHand.SteelWheel;
        } else if (this.isWheel(values)) {
            return PokerHand.Wheel;
        } else if (this.isStraight(values)) {
            return PokerHand.Straight;
        } else if (this.isFlush(suit)) {
            return PokerHand.Flush;
        }

        let valueCount = Object.keys(value).length;
        let countArr = Object.values(value);

        if (valueCount === 2) {
            return countArr.includes(4) ? PokerHand.FourOfAKind : PokerHand.FullHouse;
        } else if (valueCount === 3) {
            return countArr.includes(3) ? PokerHand.ThreeOfAKind : PokerHand.TwoPair;
        } else if (valueCount === 4) {
            return PokerHand.OnePair;
        } else {
            return PokerHand.HighCard;
        }
    }

    /**
     * @function constructSortedValue
     * @private
     * @desc Sort the card value array (no dupes) based on both value count (descendingly) and value point (descendingly)
     *     This array is for further comparison when two poker hands have the same rank point
     * @param {Count} valueCount - The object of cardValue => count
     * @return {CardValue[]} - The sort result
     */
    private constructSortedValue(valueCount: Count) {
        return Object.keys(valueCount)
            .map(Number)
            .sort((a, b) => {
                if (valueCount[a] < valueCount[b]) {
                    return 1;
                } else if (valueCount[a] > valueCount[b]) {
                    return -1
                } else {
                    if (a < b) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            });
    }

    /**
     * @function parseHand
     * @private
     * @desc Sort poker hand values, calculate suit count and value count for rank determination
     * @param {Card[]} cardList - The poker hand array to be calculated
     * @return {ParsedHand} - The hand object returned
     */
    private parseHand(cardList: Card[]): ParsedHand {
        let valueCount = {};
        let suitCount = {};
        let sortedValue = cardList.map(card => card.value).sort(this.comparator);

        // Calculate the count of value and suit
        for (let i = 0; i < cardList.length; i++) {
            let { value, suit } = cardList[i];
            if (valueCount[value] === undefined) {
                valueCount[value] = 1;
            } else {
                valueCount[value]++;
            }

            if (suitCount[suit] === undefined) {
                suitCount[suit] = 1;
            } else {
                suitCount[suit]++;
            }
        }

        return {
            sortedValue,
            suit: suitCount,
            value: valueCount,
        };
    }

    /**
     * @function comparator
     * @private
     * @desc A wrapper of isLargerThan, where a transform function of bool => 1 or -1 has been passed in
     *     This may be used as the callback of sort function
     */
    private comparator = (a, b): number => a > b ? 1 : -1;

    /**
     * @function isWheel
     * @private
     * @desc Check if a poker hand is wheel straight
     * @param {Object} values - The object of cardValue => count
     * @return {boolean}
     */
    private isWheel(values): boolean {
        // This is the only case to form a wheel
        return values[0] === 2 && values[1] === 3 && values[2] === 4 &&
            values[3] === 5 && values[4] === 14;
    }

    /**
     * @function isStraight
     * @private
     * @desc Check if a poker hand is straight
     * @param {Object} values - The object of cardValue => count
     * @return {boolean}
     */
    private isStraight(values): boolean {
        // Determine if the first four values are ascending
        for (let i = 0; i < values.length - 1; i++) {
            if (CardValue[values[i + 1]] !== CardValue[values[i] + 1]) {
                return false;
            }
        }

        // This does not apply to (steel) wheel straight
        return values[4] === values[3] + 1;
    }

    /**
     * @function isFlush
     * @private
     * @desc Check if a poker hand is flush
     * @param {Object} suitCount - The object of suit => count
     * @return {boolean}
     */
    private isFlush(suitCount): boolean {
        return Object.keys(suitCount).length === 1;
    }
}
