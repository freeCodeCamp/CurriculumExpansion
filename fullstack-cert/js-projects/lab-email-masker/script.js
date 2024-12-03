const email = "apple.pie@example.com";

const atIndex = email.indexOf("@");

const userName = email.slice(0, atIndex);
const domain = email.slice(atIndex);

const maskedName =
  userName[0] + "*".repeat(userName.length - 2) + userName[userName.length - 1];

let finalMaskedEmail = maskedName + domain;

console.log(finalMaskedEmail); // Output: "a*******e@example.com"
