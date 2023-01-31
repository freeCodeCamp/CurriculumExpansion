import Listener from './util/bind-listener.js';

/**
 * @summary This module controls the overall process of the poker game
 * @desc There are 3 steps in total:
 *     - 0: The initial page - before a user starts his session
 *         - Welcome header
 *         - Username input
 *         - Button "Start"
 *     - 1: The second page - when the user starts his session, or when the user would like to put a new bet
 *         - Welcome header, w/ username and cash amount
 *         - "Place bet" label, bet as in range input, bet as in number input and button "Set"
 *     - 2: The third page - after the user places his bet
 *         - Welcome header, w/ username and cash amount (after the calculation of winner)
 *         - Poker hand of the player and the bot
 *         - Winner info
 *         - Cash amount update
 *         - The "Next" button and the "Quit" button
 */

new Listener().bind();

