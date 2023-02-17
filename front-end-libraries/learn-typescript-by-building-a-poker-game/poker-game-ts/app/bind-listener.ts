import { $, Handler } from '../util';

export class Listener {
    public clickTokens: string[];
    public handler: Handler;

    constructor() {
        this.handler = Handler.instance;
        // ID of elements that will be attached w/ click listener
        this.clickTokens = ['start', 'bet', 'next', 'refill', 'end'];
    }

    bind(): void {
        this.clickTokens.forEach(token => {
            // Use arrow function to retain the original this as this.handler
            $(`#${token}`).onclick = () => this.handler[token]();
        });
        $('#bet-range-input').oninput = this.handler.betRangeInput;
    }
}

