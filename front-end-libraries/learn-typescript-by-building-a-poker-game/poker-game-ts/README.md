# Application Recipe
**Note: This is the order in which I built this app. Hence it is just F.Y.I.**

## Prerequisite
### Workflow
Generally, the workflow of this application is pretty straightforward:
1. User type in the `username` (default to `'Ninja Cat'`)
2. Create a session for the user with the initial cash of $100
3. User set the bet and start the round
4. Generate poker hands for the bot and the user
5. Compare both poker hands, determine the winner and update the cash
6. Show result
7. User may start another round (goto step 3) or "cash out" (goto step 1)
### Structure
Consider the modules that we need to build this application. Here is what I thought by then:
    - A Session module that handles user name and cash
    - A Player module that handles player's hand (cards that the player holds). This turned out to be the Game module
    - A Poker service that handles the logic of determining poker hand type and comparing poker hand
    - Also, we'll need some place to cache the poker that has appeared so far. This is implemented in the Deck module

## Generate card
1. Consider types, as per TypeScript. Poker hand (either the player's or the bot's) are nothing but several poker cards, with each generated randomly. Deck is just bunch of poker cards. That said, we need a `PokerCard` class. Some may consider its better to name it as an interface. But I opt-in for class due to its versatility, and the ability to use it as a constructor. In my code, I name it as `Poker`
2. So, how should we identify a real poker card? Simple, just `suit` (Spade, Heart, Club and Diamond) and `value` (from 2 to A). Both will be the attributes of `Poker`. In the application, here is what we've got so far:
    - `CardSuit` and `CardValue` as `enum`
    - `Card` as in `class`, this is the "PokerCard" mentioned above
3. It is obvious that both `PokerHand` and `Deck` are `Poker[]` (some prefers the other notation `Array<Poker>`), despite their difference in the `Poker` quantity
4. Then, we may start working on the logic of generating random cards. Note that this action is related to the `Deck` as well. We don't want an Ace of Spade to appear twice on the table, nor do we want to overuse the deck. That's the reason why we need to keep a `cache` in the deck. For every card that is randomly generated, we'll save its suit and value to the `cache`
5. In order to prevent generating duplicate cards, we'll need to check if the card is already generated in the `cache` object. If it is, just create another random card. It won't take hundreds of times before you get a valid card, no worries
6. Moreover, I decided to do a "reshuffle" when certain amount of cards are plucked out from the current deck. Since I noticed in the real casino, they never use up a full deck of card. So, we'll need to keep a counter (named `count`) in the `Deck` module as well. As you may guess, "reshuffle" is just clearing/resetting the cache object, simple yet practical

## Compare card
### Cases
1. There are altogether 11 poker hands, ranked from high to low (though, depending on the rule, Wheel and Steel Wheel may not apply):
    1. Straight flush (including Royal Flush, which is the highest)
    2. Steel wheel (a straight that starts with an A, then 2, 3, 4, 5. All in the same suit)
    3. Four of a kind
    4. Full house
    5. Flush
    6. Straight
    7. Wheel (a straight that starts with an A, then 2, 3, 4, 5)
    8. Three of a kind
    9. Two pair
    10. One pair
    11. High card
2. The High Card should always be determined as an "else" (or "fallback") case. That said, when checks for all other poker hands (e.g. straight, one pair, full house, etc.) fail, then we can conclude that it is a High Card
3. The logic to check for flush is tricky, especially for multi-deck game. For example, a two-deck game may form One Pair or Two Pair while it is still Flush at the same time. Since Flush ranks higher than either One Pair or Two Pair, checking for Flush should happen prior to determining One Pair or Two Pair
4. Honestly, it is much easier for single-deck game, which is the rule that this app goes by. In this case, any poker hands other than Straight or its alike above High Card cannot be a Flush (Flush itself excluded, for sure). Hence, we just need to handle the logic of Steel Wheel and Straight Flush
### Methodology
1. Regarding a poker hand to be determined, it will be beneficial if we "massage" the data first. As mentioned above, `PokerHand` is `Poker[]` while `Poker` is simply an object with attributes `suit` and `value`
2. Further more, consider the following cases:
    - If there is only 1 kind of suit in a poker hand, then it is a Flush
    - If there are 4 different values in a poker hand, then it must be a One Pair. e.g. player has `[5Spade, 2Club, 4Spade, 2Diamond, 9Heart]`, the values are `[5, 2, 4, 2, 9]`. Hence there are 4 different kinds of values
    - If there are 3 different values in a poker hand, then it could be a Three of a kind, or it could also be a Two Pair as well
    - If there are 2 different values in a poker hand, then it could be a Four of a kind, or it could also be a Full House
3. The above cases introduce us to a crucial statement: **We need to get the count of the suit(s) and value(s) in a poker hand**
4. Consider the following cases:
    - When both the player and the bot have High Card, to determine the winner, we need to compare the largest card. If it is identical, we move to comparing the second largest card, then the third, etc. If all cards are identical in card value, it is a draw
    - When both the player and the bot have Two Pairs, to determine the winner, we need to compare the largest pair, then the second largest pair, then the single card. If all are identical, it is a draw
    - ...and so on
5. The above cases lead to another crucial statement: **We need to sort each poker hand values for comparison**
### Implementation of poker hand type determination
1. Some of the poker hands are easy to determine:
    - When a poker hand is both a Straight and a Flush, then it is a Straight Flush
    - When a poker hand is both a Wheel and a Flush, then it is a Steel Wheel
    - When a poker hand is a Wheel/Straight/Flush **ONLY**, then it is a Wheel/Straight/Flush, respectively
2. Apparently, we'll need to build several functions for each check:
    - `isStraight`: iterate through the poker hand and check if card value is consecutive by comparing the adjacent ones
    - `isWheel`: since the only case for Wheel is `[2, 3, 4, 5, A]`, I decided to perform this check specifically
    - `isFlush`: when the count of Suit is equal to `1` (i.e. only one Card Suit in the poker hand), it is a Flush
3. For the rest, e.g. when there are altogether 2 different values in the poker hand, since it could be a Four of a kind, or it could be a Full House. But we should be able to tell if we can calculate the count of values. For Four of a kind, the count of values must be `4` and `1`. While for Full House, the count of values is `3` and `2`. Likewise, we could determine Three of a kind and Two Pair in this way.
    - When `valueCount` is `2`
        - When count of values includes `4`, it is Four of a kind
        - Or else, it is a Full House
    - When `valueCount` is `3`
        - When count of values includes `3`, it is Three of a kind
        - Or else, it is a Two Pair
    - When `valueCount` is `4`
        - It is a One Pair
    - Else, it is High Card
### Implementation of winner determination
1. Compare the hand type. Higher hand type always wins
2. If both the player and the bot have the same hand type
    1. Compare starting from the largest "special" card. For example, the largest pair in Two Pair, the three-card in Full House
    2. Compare second largest "special" card, if any. For example, the second largest pair in Two Pair
    3. Compare the largest "normal" card. For example, the largest single card in One Pair
    4. Compare the second largest "normal" card, if any. For example, the second largest single card in One Pair
    5. ...and so on
3. If everything is identical, then it is a Draw

# Some Random Thoughts
## Singleton
- There will be only one player in this game, hence only one `Session` is needed
- Since there is only one `Session`, it makes sense to have only one `Deck` as well
- `CardService` handles the logic of generating cards and the calculation of rank. Its instance is created upon using, a.k.a. lazy initialization. There is no need to make multiple instances co-exist. Hence the name "service" rather than "factory"
- Classes under `util` are similar to the services. No multiple instance is needed
## Barrel files
- Personally, I consider [barrel file](https://basarat.gitbook.io/typescript/main-1/barrel) to be beneficial. With the help of barrel file, we don't have to specify the exact file that we are looking for when we `import` something. Normally, we are pretty sure which folder the thing we are looking for resides in
