import { PokerHand } from "../component/card-collection/hand-type.interface";
import { Card, CardValue } from "../component/card";

/**
 * @interface TemplateObject - Object that contains pairs as in id => content
 * @property {string} name - The tag name
 * @property {string|TemplateObject[]} content - The content within the tag:
 *     - For string, use as is
 *     - For TemplateObject[], construct HTML content for each item before adding in between the tag
 * @property {string} [className] - The class to be assigned
 * @property {string} [idName] - The id to be assigned
 */
interface TemplateObject {
    name: string;
    content: string | TemplateObject[];
    className?: string;
    idName?: string;
}

interface HandContent {
    'bot-result': string;
    'player-result': string;
}

type ResultPartial = {
    'winner-text': string,
    'cash-result': string,
}

type ResultContent = {
    'bot-rank': string,
    'player-rank': string,
} & ResultPartial;

enum Winner {
    Bot = -1,
    Draw,
    Player
}
export class ContentService {
    private suitArr = ['♠️', '♥️', '♣️', '♦️'];
    private static self: ContentService;

    // Singleton
    public static get instance() {
        return this.self || (this.self = new this());
    };

    constructor() { }

    /**
     * @function getHand
     * @desc Generate the hand type content object (id => content) that is used directly by `setContent`
     * @param {Object} - An object contains both botHand: Card[] and playerHand: Card[]
     * @return {HandContent} - The attributes denote the id of the block to be updated and the values are the content.
     */
    getHand({ botHand, playerHand }): HandContent {
        return {
            'bot-result': this.cardResult(botHand),
            'player-result': this.cardResult(playerHand),
        };
    }

    /**
     * @function getResult
     * @desc Generate all result content object (id => content) that is used directly by `setContent`
     * @param {Object} - An object contains botRank, playerRank, winnerRef and bet
     * @return {ResultContent}: The id of 4 blocks to be updated and their content, respectively. Used directly by `setContent`
     */
    getResult({ botRank, playerRank, winnerRef, bet }): ResultContent {
        let res = {
            'bot-rank': `The bot has ${this.getRankText(botRank)}.`,
            'player-rank': `Your have ${this.getRankText(playerRank)}.`,
        };

        return Object.assign({}, res, this.getWinnerContent(winnerRef, bet));
    }

    /**
     * @function getWinnerContent
     * @private
     * @param {Winner} winnerRef - Number that indicates who is the winner
     * @param {number} bet - The amount of bet
     * @return
     */
    private getWinnerContent(winnerRef: Winner, bet: number) {
        let content = {
            'winner-text': '',
            'cash-result': ''
        };

        if (winnerRef === Winner.Draw) {
            content['winner-text'] = `😉 It's a Draw!`;
        } else if (winnerRef === Winner.Player) {
            content['winner-text'] = `😄 You're the winner! Yay!`;
            content['cash-result'] = `🤑 You won $${bet}!`;
        } else {
            content['winner-text'] = `😒 The bot won! Darn it!`;
            content['cash-result'] = `💸 You lost $${bet}!`;
        }

        return content;
    }

    /**
     * @function getRankText
     * @private
     * @param {PokerHand} hand - The poker hand as defined in hand-type.interface
     * @return The text of a poker hand, to be displayed in the result section
     */
    private getRankText(hand: PokerHand): string {
        const handType = ['high card', 'a pair', 'two pairs', 'three of a kind',
            'a wheel', 'a straight', 'a flush', 'a full house', 'four of a kind',
            'a steel wheel', 'a straight flush/royal flush'];
        return handType[hand];
    }

    /**
     * @function cardResult
     * @private
     * @desc Generate partial template for displaying cards
     * @param {Card[]} cardList - The poker hand
     * @return {string} - The HTML content of the poker hand to be rendered
     */
    private cardResult(cardList: Card[]) {
        return this.tag({
            name: 'div',
            className: 'poker-hand-result',
            content: cardList.map(card => ({
                name: 'div',
                className: 'poker-hand-result-item',
                content: [{
                    name: 'div',
                    className: 'poker-hand-card-front',
                    content: [{
                        name: 'div',
                        className: 'poker-hand-card-value-top',
                        content: this.getPoint(card.value)
                    }, {
                        name: 'div',
                        className: 'poker-hand-card-suit',
                        content: this.suitArr[card.suit]
                    }, {
                        name: 'div',
                        className: 'poker-hand-card-value-bottom',
                        content: this.getPoint(card.value)
                    }]
                }, {
                    name: 'div',
                    className: 'poker-hand-card-back',
                    content: ''
                }]
            }))
        });
    }

    /**
     * @function getPoint
     * @private
     * @param {number} value - The card value to be converted
     * @return {string} The string representation of the card value, which is from '2' - '10' and 'J' to 'A'
     */
    private getPoint(value: CardValue): string {
        const royal = ['J', 'Q', 'K', 'A'];

        if (value > 10) {
            return royal[value - 11];
        }

        return `${value}`;
    }

    /**
     * @function tag
     * @private
     * @desc Generate the HTML content based on the given parameters
     * @param {TemplateObject} - The template object to be used
     * @return {string} - The HTML string to be rendered
     */
    private tag({
        className,
        content,
        name,
        idName = ''
    }: TemplateObject): string {
        // Construct attribute string
        let attributes = this.attr({
            class: className,
            id: idName
        });

        // Recursive call when the content is of type TemplateObject[]
        if (Array.isArray(content)) {
            return `<${name}${attributes}>${content.map(e => this.tag(e)).join('')}</${name}>`
        }

        return `<${name}${attributes}>${content}</${name}>`;
    }

    /**
     * @function attr
     * @private
     * @desc Transform the HTML {attribute => value} object to string, which is to be used when composing the HTML content
     *     Return empty string when value is empty
     * @param {Object} obj - Pairs of HTML attribute => value that to be applied to the HTML element
     * @return {string} - The attribute string to be used
     */
    private attr(obj): string {
        return Object.keys(obj).map(key => obj[key] && ` ${key}="${obj[key]}"`).join('');
    }
}
