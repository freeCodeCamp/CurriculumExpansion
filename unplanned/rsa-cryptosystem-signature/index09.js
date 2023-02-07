let publicKey = 0;

function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

function generatePrivateKey() {}

function generatePublicKey() {}

/*
Suppose Alice sends an encrypted message to Bob using a symmetric key like the number 13 in `ROT13`. There's no way for Bob to verify that the sender is really Alice because anyone with access to that key can send Bob a message and claim to be Alice.

A digital signature solves this problem. By encrypting the hash value of the message with her private key Alice creates a unique signature.

Create an empty function called `generateSignature()`.
*/
