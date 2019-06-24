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
`phiOfN or Φ(N)` outputs how many numbers less than or equal to `N` that don't share any common factor with `N` other than 1.

Set `phiOfN` to 0.
*/
