const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const spamPhrases = [
  "free money",
  "work from home",
  "stock alert",
  "dear friend",
  "1 million dollars",
  "PLEASE ASSIST ME",
];

const blacklistRegexps = [
  /[0-9] hundred|thousand|million dollars/i,
  /PLEASE HELP|ASSIST ME/i,
  /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i,
  /(?:^|\s)w[o0]rk fr[o0]m h[o0]m[e3](?:$|\s)/i,
  /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i,
  /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i,
];

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
