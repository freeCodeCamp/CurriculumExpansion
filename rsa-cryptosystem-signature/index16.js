const firstPrime = 3;
const secondPrime = 2;
const N = firstPrime * secondPrime;
const phiOfN = 0;
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
Let's find `Φ(6)`: 1, 2, 3 and 6 are factors of 6. 4 shares a common factor of 2 with 6. 5 don't share any common factor with 6.

So, 1 and 5 don't share any common factor other than 1 with 6. Hence, `Φ(6) = 2`

Set `phiOfN` to 2.
*/
