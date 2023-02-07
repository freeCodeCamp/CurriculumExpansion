import { Deck } from '../component/card-collection/deck.model';
import { Game } from './game';

export class Session {
    private static self: Session;
    deck: Deck;
    game: Game;
    user: string;
    cash: number;

    // Singleton
    public static get instance() {
        return this.self || (this.self = new this());
    };

    constructor() {
        this.user = null;
        this.cash = 0;
        this.deck = new Deck();
    }

    /**
     * @function nextGame
     * @desc The callback function of starting a new game
     * @param {number} bet - The initial bet
     */
    nextGame(bet) {
        this.game = new Game(bet, this.deck);
    }

    /**
     * @function clear
     * @desc Clear current session
     */
    clear(): void {
        this.user = null;
        this.cash = 0;
    }

    /**
     * @function init
     * @desc Initialize a session
     * @param {string} userName - The user name based on user input, default to "Ninja Cat"
     */
    init(userName: string = 'Ninja Cat'): Session {
        this.user = userName;
        this.cash = 100;

        return this;
    }

    /**
     * @function isActive
     * @desc Check if there is an active session
     */
    isActive(): boolean {
        return this.user !== null;
    }

    /**
     * @function setCash
     * @desc Update cash
     * @param {number} amount
     */
    setCash(amount: number): void {
        this.cash = amount;
    }
}

