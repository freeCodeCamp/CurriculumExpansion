1. Assign your choice in a variable called `userChoice`. Its value would compete against the computer's choice.
1. Declare two variables `computerChoice` and `result` that would be used later on.
1. Generate a random integet between `1` and `3` inclusive and assign it to `randomNumber`. The number would be used to calculate the computer's choice.
1. Create a `switch` statemet that takes `randomNumber` as an argument and assigns a value to `computerChoice` based on the following conditions:
- If `randomNumber` is `1`, assign `rock` to `computerChoice`.
- If `randomNumber` is `2`, assign `scissors` to `computerChoice`.
- If `randomNumber` is `3`, assign `paper` to `computerChoice`.
1. Create multiple `if` statements that would compare `userChoice` and `computerChoice` using strict equality and assign a value to `result` based on the following conditions:
- If `userChoice` is equal to `computerChoice`, assign `draw!` to `result`.
- If `userChoice` is equal to `rock` and `computerChoice` is equal to `scissors`, assign `you win!` to `result`.
- If `userChoice` is equal to `rock` and `computerChoice` is equal to `paper`, assign `you lose!` to `result`.
- If `userChoice` is equal to `scissors` and `computerChoice` is equal to `rock`, assign `you lose!` to `result`.
- If `userChoice` is equal to `scissors` and `computerChoice` is equal to `paper`, assign `you win!` to `result`.
- If `userChoice` is equal to `paper` and `computerChoice` is equal to `rock`, assign `you win!` to `result`.
- If `userChoice` is equal to `paper` and `computerChoice` is equal to `scissors`, assign `you lose!` to `result`.
1. Display the following message in the console: `You chose ${userChoice}, computer chose ${computerChoice}, ${result}`.
