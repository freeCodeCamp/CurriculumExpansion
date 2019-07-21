const firstPrime = 2;
let publicKey = 0;

/*
Prime numbers are only divisible by 1 and by the number itself. 
The first few prime numbers are 2, 3, 5, 7, and 11.

Create a constant `secondPrime` and set it to 5.
*/

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
