import { $all, hide, setContent, show, showAll } from "../util";
import { Card } from '../component/card';
import { Deck } from '../component/card-collection/deck.model';
import { Session } from "./session";
import { CardService } from '../service/card.service';
import { ContentService } from '../service/content.service';
import { PokerHand } from "../component/card-collection/hand-type.interface";

enum Winner {
    Bot = -1,
    Draw,
    Player
}

interface Result {
    botRank: PokerHand;
    playerRank: PokerHand;
    winnerRef: Winner;
}

export class Game {
    botHand: Card[];
    playerHand: Card[];
    card: CardService;
    content: ContentService;
    session: Session = Session.instance;
    private result: Result;

    constructor(
        private bet: number,
        private deck: Deck
    ) {
        this.card = CardService.instance;
        this.content = ContentService.instance;
        this.botHand = this.deck.createCardHand(5);
        this.playerHand = this.deck.createCardHand(5);
        this.result = this.card.getCompareResult(this.botHand, this.playerHand);
        this.showResult(this.result);
        setContent(this.content.getHand({
            botHand: this.botHand,
            playerHand: this.playerHand,
        }));
        this.showCard();
    };

    /**
     * @function showResult
     * @private
     * @desc Set content while result container is hidden. Reveal result and update cash after 5 seconds
     */
    private showResult({ botRank, playerRank, winnerRef }: Result) {
        setContent(this.content.getResult({
            botRank,
            playerRank,
            winnerRef,
            bet: this.bet,
        }));
        this.updateCash(winnerRef);

        setTimeout(() => {
            showAll('result-rank-container', 'bot-rank');
        }, 2500);

        setTimeout(() => {
            showAll('player-rank', 'result-text-container');
            setContent({
                cash: this.session.cash
            });
        }, 5000);
    }

    /**
     * @function updateCash
     * @private
     * @desc Update player's cash based on the winnerRef
     * @param {Winner} winnerRef - 1, 0 or -1
     */
    private updateCash(winnerRef: Winner) {
        const currentCash = this.session.cash;
        if (winnerRef === Winner.Player) {
            this.session.setCash(currentCash + this.bet);
        } else if (winnerRef === Winner.Bot) {
            this.session.setCash(currentCash - this.bet);
        }

        this.checkBalance(this.session.cash);
    }

    /**
     * @function showCard
     * @private
     * @desc Show all 10 cards at the speed of 1 card per 0.5 second
     */
    private showCard() {
        const cards = $all('.poker-hand-result-item');

        cards.forEach((card, index) => {
            this.rotate(card, index * 500);
        });
    }

    /**
     * @function rotate
     * @private
     * @param {Object} item - The DOM ref of a card
     * @param {number} timeout - The timeout to be set
     * @desc Add rotateY transform to card, excuted after the given time period
     */
    private rotate(item, timeout) {
        setTimeout(() => {
            item.style.transform = 'translateX(-100%) rotateY(180deg)';
        }, timeout);
    }

    /**
     * @function checkBalance
     * @private
     * @desc Check the remaining cash, determine which action button to display after 5 seconds
     */
    private checkBalance(cash) {
        if (cash > 0) {
            hide('refill');
            show('next');
        } else {
            setTimeout(() => {
                hide('next');
                show('refill');
            }, 5000);
        }
        setTimeout(() => {
            show('action-container');
        }, 5000);
    }
}
