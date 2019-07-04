const isSpam = msg => {
  const re = /./;
  /*
  Now, let's start making our `re` regex more useful.

  We will test against 5 phrases commonly seen in spam emails:
  * viagra
  * free money
  * work from home
  * stock alert
  * dear friend

  To test for multiple substrings with a single regex, you can use the regex OR operator. This is similar in concept to JavaScript's OR, except that it uses a single pipe (`|`) instead of a double pipe.

  For example: the regex `/foo bar|baz quux/` will match any string that contains either "foo bar" or "baz quux" as a substring.

  Use the OR operator to test for our 5 spam phrases.
  */

  return re.test(msg);
};
