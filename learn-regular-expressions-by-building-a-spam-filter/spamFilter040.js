const isSpam = msg => {
  const re = /viagra|free money|work from home|stock alert|dear friend/;
  /*
  Looking good!

  However, the spammers are getting smarter. They've learned to sometimes mix up the case of their key phrases. As well as "free money", our filter also needs to be able to handle "FREE MONEY", "free MONEY", or even "fReE MoNEy".

  Luckily, regex has just the tool for that: the case-insensitivity flag, `i`.

  Regex flags are letters that you attach to the end of your regex to modify its behavior. For example, to create a case-insensitive regex for "foo bar", you would simply write `/foo bar/i`.

  Add the `i` flag to the end of the regex.
  */

  return re.test(msg);
};
