const myTeam = {
  "Team": "Argentina",
  "Sport": "Football",
  "Year": 1986
};

/*
Key names that include spaces are valid JSON.

A quick aside about JavaScript syntax and JSON. Recall that JavaScript object literal syntax lets you type a key without any quotes around it. This only works when your key name is a valid JavaScript identifier: it doesn't have spaces, hyphens, or start with a number. If you want to use these characters in a key name when you're creating a JavaScript object, you would need to put the key name in quotes - does this sound familiar?

JSON already requires that you surround all string values with double quotes. Because of this, JSON is very flexible with what you're allowed to use as valid key names to structure your data.

Add another key-value pair after `Year` for `Is World Cup Winner`, this time use a Boolean value set to `true`. Remember not to surround this value with quotation marks - `"true"` is not the same as `true` - one is a string, the other is a Boolean value.
*/
