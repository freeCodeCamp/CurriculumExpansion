const firstPrime = 3;
const secondPrime = 2;
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

function generateSignature() {}

function decryptSignature() {}

/*
Create a constant `N` and set it as `firstPrime * secondPrime`.
`N` will be a part of both private and public key.
*/
