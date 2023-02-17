/**
 * Poker related type def
 * @typedef {2|3|4|5|6|7|8|9|10|"J"|"Q"|"K"|"A"} CardValue
 * @typedef {"S"|"H"|"C"|"D"} SuitValue
 */
/**
 * Poker object type def
 * @typedef {Object} Poker
 * @property {SuitValue} suit - The suit of a single card
 * @property {CardValue} value - The value of a single card
 */
/**
 * Cache object type def
 * @typedef {Object} Cache
 * @property {Object} suit - With value of CardValue[], denoting the cards that have been generated
 */

/**
 * @module Generate
 * @desc The module that contains method of generating poker hand
 */
export default class Generate {
    constructor() {
        this.cache = {};
        this.suit = ['S', 'H', 'C', 'D'];
        this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        this.total = 0;

        this._init();
    }

    /**
     * @function Generate~hand
     * @public
     * @desc Generate a poker hand, 5 cards
     */
    hand() {
        let result = [];

        for (let i = 0; i < 5; i++) {
            let card = this._generateSingle(this.cache);
            let { suit, value } = card;
            this.cache[suit].push(value);
            this.total++;
            result.push(card);
        }

        // Reshuffle
        if (this.total > 30) {
            this._clear();
        }

        return result;
    }

    /**
     * @function Generate~_clear
     * @private
     * @desc Clear current card count and the cache object, then call _init
     */
    _clear() {
        this.total = 0;
        this._init();
    }

    /**
     * @function Generate~_generateSingle
     * @private
     * @desc Generate a single card object
     * @param {Cache} cache - the cache object
     * @return {Poker} - The randomly generated poker card
     */
    _generateSingle(cache) {
        let card = {};

        do {
            card.suit = this.suit[this._getRandomNumber(this.suit.length - 1)];
            card.value = this.value[this._getRandomNumber(this.value.length - 1)];
        } while (this.cache[card.suit].includes(card.value));

        return card;
    }

    /**
     * @function Generate~_getRandomNumber
     * @private
     * @desc Generate a random integer within a given range
     * @param {Number} max - The upper limit of the random integer
     * @return {Number} - The generated random integer
     */
    _getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    /**
     * @function Generate~_init
     * @private
     * @desc Init the cache object, this is to mimic the behavior of adding a new card deck by calling this method
     */
    _init() {
        for (let i = 0; i < this.suit.length; i++) {
            this.cache[this.suit[i]] = [];
        }
    }
}

