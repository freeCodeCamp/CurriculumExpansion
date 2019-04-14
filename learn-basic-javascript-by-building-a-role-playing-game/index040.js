var xp = 0;
var health = 100;
var gold = 50;
var currentWeapon = 0;

/*
We've been declaring variables with the 'var' keyword.
However, in modern JavaScript, it's better to use 'const' or 'let' instead, because they fix a number of unusual behaviors with 'var' that make it difficult to reason about.
'const' signals that a variable can only be assigned once, and 'let' signals that we want to reassign it.
Because we will be changing these values as the game progresses, let's use 'let' for all of them.
*/
