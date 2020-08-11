/**
 * Object that contains pairs as in id => content
 * @typedef {Object} TemplateObject
 *name, content, className = '', idName = ''
 * @property {String} name - The tag name
 * @property {String|TemplateObject[]} content - The content within the tag:
 *     - For string, use as is
 *     - For TemplateObject[], construct HTML content for each item before adding in between the tag
 * @property {String} [className] - The class to be assigned
 * @property {String} [idName] - The id to be assigned
 */

/**
 * @module ComposeContent
 * @desc The module to be used for creating HTML content
 */
export default class ComposeContent {
    constructor() {
        this.suitMap = {
            S: '♠️',
            H: '♥️',
            C: '♣️',
            D: '♦️'
        }
    }

    /**
     * @function ComposeContent~card
     * @public
     * @desc Generate the partial template for displaying cards
     * @param {Poker[]} cardList - The poker hand
     * @param {"player" | "bot"} owner - Denotes the owner of the poker hand
     * @see ../lib/generate.js for Poker type def
     * @return {String<HTML>} - The HTML content of the poker hand
     */
    card(cardList, owner) {
        return this._tag({
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
                        content: card.value
                    }, {
                        name: 'div',
                        className: 'poker-hand-card-suit',
                        content: this.suitMap[card.suit]
                    }, {
                        name: 'div',
                        className: 'poker-hand-card-value-bottom',
                        content: card.value
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
     * @function ComposeContent~_tag
     * @private
     * @desc Generate the HTML content based on the given parameters
     * @param {TemplateObject} - The template object to be used
     * @return {String<HTML>} - The HTML content
     */
    _tag({ name, content, className = '', idName = '' }) {
        // Construct attribute string
        let attributes = this._attr({
            class: className,
            id: idName
        });

        // Recursive call when the content is of type TemplateObject[]
        if (Array.isArray(content)) {
            return `<${name}${attributes}>${content.map(e => this._tag(e)).join('')}</${name}>`
        }

        return `<${name}${attributes}>${content}</${name}>`;
    }

    /**
     * @function ComposeContent~_attr
     * @private
     * @desc Transform the HTML attribute => value object to string, which is to be used when composing the HTML content
     *     Return empty string when value is empty
     * @param {Object} obj - Pairs of HTML attribute => value
     * @return {String} - The attribute string to be used
     */
    _attr(obj) {
        return Object.keys(obj).map(key => obj[key] && ` ${key}="${obj[key]}"`).join('');
    }
}

