const firstPrime = 2;
const secondPrime = 5;
const N = firstPrime * secondPrime;

/*
The coprimes with 7 up to 7 are 1, 2, 3, 4, 5 and 6, or `Φ(7)` = 6.
In general, `Φ(prime) = prime - 1`.

Set `phiOfN` equal to `firstPrime - 1`.
*/

const phiOfN = 4;
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

function generatePrivateKey() {
  for (let privateKey = 2; privateKey < phiOfN; ++privateKey) {}
}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
