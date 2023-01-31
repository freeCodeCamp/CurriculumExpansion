const firstPrime = 3;
const secondPrime = 5;
const N = firstPrime * secondPrime;
let publicKey = 0;

/*
Private key must be between 1 and `Φ(N)` or `1 < privateKey < Φ(N)`.

`Φ(N)` pronounced as phi of N is called Euler's totient function. It outputs number of integers up to `N` that are coprime with `N`.

Create a constant `phiOfN` and set it to 0.
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
