const isSpam = msg => {
  const re = /viagra|free money|work from home|stock alert|dear friend/i;
  /*
  Good job, but the war on spam is never over!

  The spammers have started replacing characters with lookalikes: "S" becomes "5", "E" becomes "3", and so on.

  Handling this is going to get messy very quickly, so let's start by refactoring our single regex into 5 regexes, one for each phrase.

  Remove the `re` variable, and add the new regexes to an array called `blacklistRegexes`. Remember that they each need the `i` flag.

  Finally, comment out the `return` statement for now, to avoid throwing errors with the newly-nonexistent `re` variable.
  */

  return re.test(msg);
};
