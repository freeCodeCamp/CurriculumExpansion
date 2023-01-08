const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

/**
 * For the first regex in the list we could start with the [0-9] character group and matching with literal phrases like
 * hundred, thousand million and billion
 * Then we can slowly refactor it in other steps to include the \d, \s  * and ? flags
 * At the end could have something like this
 * \d*\s+(hundred|thousand|million|billion)(\s+dollars)?
 *
 *
 */

/**
 * If we want to teach how to match a whole phrase like "please help me",
 * this would be a good place to introduce a capture group around HELP|ASSIST. - Kris
 *
 */

/**
 * A note about adding positive lookaheads. We could start with what is written about also refactor it in other steps
 * to include positive lookaheads
 *
 * For positive lookaheads, something like /\d+(?=\s+dollars)/gi would match "100" in "100 dollars", and "000" in "1,000 dollars".
 * We could also look for other currencies like euros that often come up in spam emails with /\d+(?=\s+(dollars|euros))/gi.
 * We could even search for USD or EUR. - Kris
 *
 */

const denyListRegexps = [
  /[0-9] hundred|thousand|million|billion dollars/gi,
  /PLEASE HELP|ASSIST ME/i,
  /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i,
  /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i,
  /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i,
];

/**
 * We could add a step that has the camper use match here first,
 * then explain that because we don't need to do anything with the matched value,
 * moving to test could be more performant. - Naomi
 *
 */
const isSpam = (msg) => blacklistRegexps.some((re) => re.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please provide a message");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message"
    : "This message does not seem to contain any spam";
  messageInput.value = "";
});
