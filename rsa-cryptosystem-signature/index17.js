const firstPrime = 3;
const secondPrime = 2;
const N = firstPrime * secondPrime;
const phiOfN = 2;
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
Let's find `Φ(7)`: 1, 2, 3, 4, 5 and 6 don't share any common factor other than 1 with 7. 
So, `Φ(7) = 6 i.e. 7 - 1`.

We conclude, for every prime number `Φ(prime) = prime - 1`.

Set `phiOfN` to `(firstPrime - 1)`.
*/
