import { $, $all } from './query.js';
import Session from '../lib/session.js';
import Generate from '../lib/generate.js';
import Compare from '../lib/compare.js';
import ComposeContent from './compose-content.js';

/**
 * Object that contains pairs as in id => content
 * @typedef {Object} ElementContent
 * @property {String} ${id} - The content to be updated on the element of ${id}
 */
/**
 * Object that contains pairs as in attribute => value of a DOM element
 * @typedef {Object} AttrValue
 * @property {String} ${attr} - The value(s) to be updated for the attribute(s) of a given DOM element
 * @property {AttrValue} [style] - The style attribute and value that to be applied on a given DOM element
 */
/**
 * Object used for setting result content
 * @typedef {Object} ResultContent
 * @property {Number} botRank - The number that represents the type of bot's poker hand
 * @property {String} cashContent - The content to be displayed as cash change info
 * @property {Number} playerRank - The number that represents the type of player's poker hand
 * @property {String} winnerContent - The content to be displayed as winner info
 */

/**
 * @module Handler
 * @desc The module that contains all event handler
 */
export default class Handler {
    constructor() {
        this.session = null;
        this.Session = Session;
        this.generate = new Generate();
        this.compare = new Compare();
        this.composeContent = new ComposeContent();
        this.rankMap = {
            1: 'high card',
            2: 'a pair',
            3: 'two pairs',
            4: 'three of a kind',
            5: 'a straight',
            6: 'a flush',
            7: 'a full house',
            8: 'four of a kind',
            9: 'a straight flush/royal flush'
        };

        this._hideAll('cash-container', 'bet-container', 'result-container', 'result-rank-container');
    }

    /**
     * @function Handler~start
     * @desc Click handler of the #start button
     */
    start = () => {
        this._showAll('bet-container', 'cash-container');
        this._hideAll('welcome-container', 'result-container');

        let userName = $('#user-name-input').value || 'Ninja Cat';

        // Check if there is an on-going session
        // Create one if not
        if (!this.session) {
            this.session = new this.Session(userName);
        }

        // Set name and cash
        this._setContent({
            cash: this.session.cash,
            'user-name': userName
        });

        // "Two-way binding" of both (slider and text) input
        // See: https://getmdl.io/components/index.html#sliders-section
        $('#bet-range-input').MaterialSlider.change(+Math.ceil(this.session.cash / 4));
        this._setAttr({
            id: 'bet-range-input',
            max: this.session.cash
        });

        this._setContent({
            'bet-value-input-val': +Math.ceil(this.session.cash / 4)
        });
    };

    /**
     * @function Handler~bet
     * @desc Click handler of the #bet button
     */
    bet = () => {
        this._show('result-container');
        this._hideAll('bet-container', 'result-text-container', 'action-container', 'result-rank-container', 'bot-rank', 'player-rank');

        let betValue = +$('#bet-range-input').value;

        this._setContent({ 'bet-in-result': betValue });

        let playerHand = this.generate.hand();
        let botHand = this.generate.hand();
        let { botRank, playerRank, val: winnerRef } = this.compare.isPlayerWinning(playerHand, botHand);
        let result = {
            botRank: this.rankMap[botRank],
            playerRank: this.rankMap[playerRank],
        };

        this._setContent({
            'bot-result': this.composeContent.card(botHand, 'bot'),
            'player-result': this.composeContent.card(playerHand, 'player')
        });

        this._showCard();

        if (winnerRef === 0) {
            this._showResult(Object.assign(result, {
                winnerContent: `😉 It's a Draw!`,
                cashContent: ''
            }));
        } else {
            let userWin = winnerRef > 0;

            // Update winner info and calculate cash
            if (userWin) {
                this.session.cash += betValue;
                this._showResult(Object.assign(result, {
                    winnerContent: `😄 You're the winner! Yay!`,
                    cashContent: `🤑 You won $${betValue}!`
                }));
            } else {
                this.session.cash -= betValue;
                this._showResult(Object.assign(result, {
                    winnerContent: `😒 The bot won! Darn it!`,
                    cashContent: `💸 You lost $${betValue}!`
                }));
            }

            this._checkBalance(this.session.cash);
        }
    };

    /**
     * @function Handler~refill
     * @desc Click handler of the #refill button, add $100 to cash
     */
    refill = () => {
        this.session.cash += 100;
        this.start();
    };

    /**
     * @function Handler~next
     * @desc Click handler of the #next button
     */
    next = () => {
        this._hide('result-container');
        this.start();
    };

    /**
     * @function Handler~end
     * @desc Click handler of the #end button
     */
    end = () => {
        this._hideAll('cash-container', 'bet-container', 'result-container');
        this._setContent({
            'user-name': ''
        });
        this._setAttr({
            id: 'user-name-input',
            value: 'Ninja Cat'
        });
        this._show('welcome-container');
        this.session = null;
    };

    /**
     * @function Handler~betRangeInput
     * @desc Input handler of the #bet-range-input slider
     * @param {Object} e - The event object
     */
    betRangeInput = e => {
        this._setContent({
            'bet-value-input-val': +e.target.value
        });
    };

    /**
     * @function Handler~_checkBalance
     * @private
     * @desc Check the remaining cash, determine which action button to display after 5 seconds
     */
    _checkBalance(cash) {
        if (cash > 0) {
            this._hide('refill');
            this._show('next');
        } else {
            setTimeout(() => {
                this._hide('next');
                this._show('refill');
            }, 5000);
        }
        setTimeout(() => {
            this._show('action-container');
        }, 5000);
    }

    /**
     * @function Handler~_showCard
     * @private
     * @desc Show each card after half of a second
     */
    _showCard = () => {
        const cards = $all('.poker-hand-result-item');

        cards.forEach((card, index) => {
            this._rotate(card, index * 500);
        });
    };

    /**
     * @function Handler~_showResult
     * @private
     * @desc Set content while result container is hidden. Reveal result and update cash after 5 seconds
     * @param {ResultContent} - The object contains content of result
     */
    _showResult = ({
        botRank,
        cashContent,
        playerRank,
        winnerContent,
    }) => {
        this._setContent({
            'winner-text': winnerContent,
            'cash-result': cashContent,
            'bot-rank': `The bot has ${botRank}.`,
            'player-rank': `Your have ${playerRank}.`
        });

        setTimeout(() => {
            this._showAll('result-rank-container', 'bot-rank');
        }, 2500);

        setTimeout(() => {
            this._showAll('player-rank', 'result-text-container');
            this._setContent({
                cash: this.session.cash
            });
        }, 5000);
    }


    /**
     * @function Handler~_rotate
     * @private
     * @param {Object} item - The DOM ref of a card
     * @param {Number} timeout - The timeout to be set
     * @desc Add rotateY transform to card, excuted after the given time period
     */
    _rotate = (item, timeout) => {
        setTimeout(() => {
            item.style.transform = 'rotateY(180deg)';
        }, timeout);
    };

    /**
     * @function Handler~_setContent
     * @private
     * @desc Update the content (innerHTML) of each element with `id`
     * @param {ElementContent} obj - Pairs of id => content
     */
    _setContent(obj) {
        for (let id in obj) {
            $(`#${id}`).innerHTML = obj[id];
        }
    }

    /**
     * @function Handler~_setAttr
     * @private
     * @desc Update the value(s) for the attribute(s) within the element of ${id}
     * @param {String} id - The id of a DOM element
     * @param {AttrValue} obj - Rest of the parameter, which are pairs of attr => value
     */
    _setAttr({ id, ...pairs }) {
        let ref = $(`#${id}`);
        for (let attr in pairs) {
            if (attr === 'style') {
                let styleObj = pairs.style;
                for (let styleAttr in styleObj) {
                    ref.style[styleAttr] = styleObj[styleAttr];
                }
            } else {
                ref[attr] = pairs[attr];
            }
        }
    }

    /**
     * @function Handler~_hide
     * @private
     * @desc Hide element of id
     * @param {String} id - The id of an element that should be hidden
     */
    _hide(id) {
        this._setAttr({
            id,
            style: {
                display: 'none'
            }
        });
    }

    /**
     * @function Handler~_hideAll
     * @private
     * @desc Hide all elements based on the id list passed in
     * @param {...String} idList - The id(s) of the element(s) that should be hidden
     */
    _hideAll(...idList) {
        for (let i = 0; i < idList.length; i++) {
            this._hide(idList[i]);
        }
    }

    /**
     * @function Handler~_show
     * @private
     * @desc Show element of id
     * @param {String} id - The id of an element that should be displayed
     *     If the id is ending with 'container', set `display` to 'flex'
     */
    _show(id) {
        this._setAttr({
            id,
            style: {
                display: /container$/.test(id) ? 'flex' : 'block'
            }
        });
    }

    /**
     * @function Handler~_showAll
     * @private
     * @desc Show all elements based on the id list passed in
     * @param {...String} idList - The id(s) of the element(s) that should be hidden
     */
    _showAll(...idList) {
        for (let i = 0; i < idList.length; i++) {
            this._show(idList[i]);
        }
    }
}

