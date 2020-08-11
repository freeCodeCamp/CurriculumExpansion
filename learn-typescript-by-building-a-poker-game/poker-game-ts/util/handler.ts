import { $, hide, hideAll, setAttr, setContent, show, showAll } from './dom';
import { Deck } from "../component/card-collection/deck.model";
import { Session } from '../app/session';

interface MaterialSliderElement extends HTMLInputElement {
    MaterialSlider: {
        change(value: number);
        disable();
        enable();
    }
}

/**
 * @class Handler
 * @desc The module that contains all event handler
 */
export class Handler {
    private static self: Handler;
    public rankMap: Object;
    private session: Session;
    private deck: Deck;

    // Singleton
    public static get instance() {
        return this.self || (this.self = new this());
    };

    constructor() {
        this.deck = Deck.instance;
        this.session = Session.instance;

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

        hideAll('cash-container', 'bet-container', 'result-container', 'result-rank-container');
    }

    /**
     * @function start
     * @desc Click handler of the #start button
     */
    start() {
        showAll('bet-container', 'cash-container');
        hideAll('welcome-container', 'result-container');

        let userName = $('#user-name-input').value || 'Ninja Cat';
        let betRangeInputRef = $('#bet-range-input') as MaterialSliderElement;

        // Check if there is an on-going session
        // Create one if not
        if (!this.session.isActive()) {
            this.session = this.session.init(userName);
        }

        // Set name and cash
        setContent({
            cash: this.session.cash,
            'user-name': userName
        });

        // "Two-way binding" of both (slider and text) input
        // See: https://getmdl.io/components/index.html#sliders-section
        betRangeInputRef.MaterialSlider.change(+Math.ceil(this.session.cash / 4));
        setAttr({
            id: 'bet-range-input',
            max: this.session.cash
        });

        setContent({
            'bet-value-input-val': +Math.ceil(this.session.cash / 4)
        });
    }

    /**
     * @function bet
     * @desc Click handler of the #bet button
     */
    bet() {
        show('result-container');
        hideAll('bet-container', 'result-text-container', 'action-container', 'result-rank-container', 'bot-rank', 'player-rank');

        let betValue = +$('#bet-range-input').value;
        setContent({ 'bet-in-result': betValue });

        this.session.nextGame(betValue);
    }

    /**
     * @function refill
     * @desc Click handler of the #refill button, add $100 to cash
     */
    refill() {
        this.session.cash += 100;
        this.start();
    }

    /**
     * @function next
     * @desc Click handler of the #next button
     */
    next() {
        hide('result-container');
        this.start();
    }

    /**
     * @function end
     * @desc Click handler of the #end button
     */
    end() {
        hideAll('cash-container', 'bet-container', 'result-container');
        setContent({
            'user-name': ''
        });
        setAttr({
            id: 'user-name-input',
            value: ''
        });
        show('welcome-container');

        this.session.clear();
        // Reset the deck for the new session later on
        this.deck.reset();
    }

    /**
     * @function betRangeInput
     * @desc Input handler of the #bet-range-input slider
     * @param {Object} e - The event object
     */
    betRangeInput = e => {
        setContent({
            'bet-value-input-val': +e.target.value
        });
    };
}
