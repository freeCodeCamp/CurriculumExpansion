const firstPrime = 2;
const secondPrime = 5;
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

function isCoPrime(smallerNum, largerNum) {
  for (let i = 2; i <= smallerNum; ++i) {
    if (smallerNum % i === 0 && largerNum % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrivateKey() {}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}

/*
We know, private key must be: 1 < privateKey < `Φ(N)`.

Create a `for` loop in `generatePrivateKey()` function to iterate from 2 to `phiOfN - 1`.
*/
