const firstPrime = 2;
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
Remember, prime numbers are only divisible by 1 and by the number itself.
E.g. 2, 3, 5, 7, 11, etc.

Create a constant `secondPrime` and set it to 5.
*/
