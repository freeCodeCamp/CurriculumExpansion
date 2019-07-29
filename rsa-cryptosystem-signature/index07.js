function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; i++) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

function generatePublicKey() {}

/*
However the private key must be kept secret.

Create an empty function `generatePrivateKey()`.
*/
