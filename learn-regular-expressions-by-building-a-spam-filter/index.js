const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

/**
 * I read through the previous discussions for this project
 * and we can start with matches for literal phrases and then have the
 * campers create more complex regex which seemed to be the original intent for this project.
 *
 *
 *
 */

const blacklistRegexps = [
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
