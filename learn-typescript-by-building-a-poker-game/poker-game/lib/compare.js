/**
 * @module Compare
 * @desc The module that contains method of comparing poker hands
 */
export default class Compare {
    constructor() {
        this.royalPoints = {
            J: 11,
            Q: 12,
            K: 13,
            A: 14
        };
    }

    /**
     * Winning object type definition
     * @typedef {Object} WinnerObj
     * @property {RankObj~rank} playerRank - The rank point of player's hand
     * @property {RankObj~rank} botRank - The rank point of bot's hand
     * @property {1 | 0 | -1} val - The value count object of the poker hand
     *     - `1` denotes that player is the winner
     *     - `-1` denotes that bot is the winner
     *     - `0` denotes a draw
     */
    /**
     * @function Compare~isPlayerWinning
     * @desc Check if player is the winner
     * @param {Poker[]} player - The poker hand of player
     * @param {Poker[]} bot - The poker hand of bot
     * @see generate.js for Poker type def
     * @return {WinnerObj} - The object that contains winner info, used by handler
     */
    isPlayerWinning(player, bot) {
        const playerHand = this._generateHandObj(player);
        const botHand = this._generateHandObj(bot);

        const { values: playerValues, rank: playerRank } = this._calculateHandRank(playerHand);
        const { values: botValues, rank: botRank } = this._calculateHandRank(botHand);

        let result = { playerRank, botRank };

        if (playerRank !== botRank) {
            return Object.assign(result, {
                val: playerRank > botRank ? 1 : -1
            });
        }

        let index = 0;
        // Compare each card from the beginning
        while (index < playerValues.length) {
            let playerCurr = playerValues[index];
            let botCurr = botValues[index];
            if (playerCurr !== botCurr) {
                return Object.assign(result, {
                    val: this._comparator(playerCurr, botCurr)
                });
            }
            index++;
        }

        return Object.assign(result, {
            val: 0
        });
    }

    /**
     * @function Compare~_getPoint
     * @private
     * @desc Get the point of a card. 2 ~ 10 as is, J ~ A as in 11 ~ 14
     * @param {CardValue} val - The card value
     * @return {Number} - The result with range of [2, 14]
     */
    _getPoint(val) {
        if (typeof val === 'number') {
            return val;
        } else {
            return this.royalPoints[val];
        }
    }

    /**
     * @function Compare~_isLargerThan
     * @private
     * @desc Compare two card values passed in
     * @param {CardValue} a - The card value
     * @param {CardValue} b - The card value
     * @param {Function} [transformFunc] - The transform function (boolean => any) to be applied before finalizing the result
     * @return {Boolean|any} - Comparison result:
     *     - When no transform function is passed in, return boolean
     *     - Else, it depends on the return value of the transform function
     */
    _isLargerThan(a, b, transformFunc) {
        let temp = this._getPoint(a) > this._getPoint(b);

        if (typeof transformFunc === 'function') {
            return transformFunc(temp);
        }

        return temp;
    }

    /**
     * @function Compare~_comparator
     * @private
     * @desc A wrapper of _isLargerThan, where a transform function of bool => 1 or -1 has been passed in
     *     This may be used as the callback of sort function
     */
    _comparator = (a, b) => {
        return this._isLargerThan(a, b, bool => bool ? 1 : -1);
    }

    /**
     * Poker object type definition
     * @typedef {Object} HandObj
     * @property {CardValue[]} sortedValue - Poker hand values sorted by _comparator, ascendingly
     * @property {Object} suit - The suit count object of the poker hand
     * @property {Object} value - The value count object of the poker hand
     */
    /**
     * @function Compare~_generateHandObj
     * @private
     * @desc Sort poker hand values, calculate suit count and value count for rank determination
     * @param {Poker[]} cardList - The poker hand array to be calculated
     * @return {HandObj} - The hand object returned
     */
    _generateHandObj(cardList) {
        let valueCount = {};
        let suitCount = {};
        let sortedValue = cardList.map(card => card.value).sort(this._comparator);

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
     * Rank object type definition
     * @typedef {Object} RankObj
     * @property {CardValue[]} values - Card values sorted based on both value count and value point
     *     This is for further comparison when two poker hands have the same rank point
     * @property {1|2|3|4|5|6|7|8|9} rank - The rank point, where:
     *     - 1: High card
     *     - 2: Pair
     *     - 3: Two pairs
     *     - 4: Three of a kind
     *     - 5: Straight
     *     - 6: Flush
     *     - 7: Full house
     *     - 8: Four of a kind
     *     - 9: Straight flush/Royal flush
     */
    /**
     * @function Compare~_calculateHandRank
     * @private
     * @desc Calculate poker hand rank point
     * @param {HandObj} - The hand object to be calculated
     * @return {RankObj} - The result for further comparison
     */
    _calculateHandRank({ sortedValue: values, suit, value }) {
        let result = {
            values: this._constructSortedValue(value)
        };
        // Check if is straight/flush, or both
        if (this._isStraight(values) && this._isFlush(suit)) {
            return Object.assign(result, {
                rank: 9
            });
        } else if (this._isStraight(values)) {
            return Object.assign(result, {
                rank: 5
            });
        } else if (this._isFlush(suit)) {
            return Object.assign(result, {
                rank: 6
            });
        }

        let valueCount = Object.keys(value).length;
        let countArr = Object.values(value);

        if (valueCount === 2) {
            // Four of a kind or full house
            return Object.assign(result, {
                rank: countArr.includes(4) ? 8 : 7
            });
        } else if (valueCount === 3) {
            // Three of a kind or two pairs
            return Object.assign(result, {
                rank: countArr.includes(3) ? 4 : 3
            });
        } else if (valueCount === 4) {
            // One pair
            return Object.assign(result, {
                rank: 2
            });
        } else {
            // High card
            return Object.assign(result, {
                rank: 1
            });
        }
    }

    /**
     * @function Compare~_constructSortedValue
     * @private
     * @desc Sort the card value array (no dupes) based on both value count (descendingly) and value point (descendingly)
     *     This array is for further comparison when two poker hands have the same rank point
     * @param {HandObj~value} valueObj - The object of cardValue => count
     * @return {CardValue[]} - The sort result
     */
    _constructSortedValue(valueObj) {
        return Object.keys(valueObj)
            // Map [2, 10] to number, retain ['J', 'A']
            .map(key => +key || key)
            .sort((a, b) => {
                if (valueObj[a] < valueObj[b]) {
                    return 1;
                } else if (valueObj[a] > valueObj[b]) {
                    return -1
                } else {
                    if (this._getPoint(a) < this._getPoint(b)) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            });
    }

    /**
     * @function Compare~_isStraight
     * @private
     * @desc Check if a poker hand is straight
     * @param {HandObj~value} values - The object of cardValue => count
     * @return {Boolean}
     */
    _isStraight(values) {
        // Determine if the first four values are ascending
        for (let i = 0; i < values.length - 1; i++) {
            if (this._getPoint(values[i + 1]) !== this._getPoint(values[i] + 1)) {
                return false;
            }
        }

        // Check if is wheel
        // If not, check the last two items
        return values[0] === 2 && values[4] === 'A' ||
            this._getPoint(values[4]) === this._getPoint(values[3]) + 1;
    }

    /**
     * @function Compare~_isFlush
     * @private
     * @desc Check if a poker hand is flush
     * @param {HandObj~suit} suit - The object of suit => count
     * @return {Boolean}
     */
    _isFlush(suit) {
        return Object.keys(suit).length === 1;
    }
}

