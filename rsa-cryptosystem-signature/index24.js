const firstPrime = 2;
const secondPrime = 5;
const N = firstPrime * secondPrime;
const phiOfN = (firstPrime - 1) * (secondPrime - 1);
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
  for (let privateKey = 2; privateKey < phiOfN; ++privateKey) {
    /*
    Private keys have two constraints.
    First, it must be greater than 1 and less than `Φ(N)`.
    Second, it must be coprime with `N` and `Φ(N)`.

    You already took care of the first constraint with the `for` loop.

    Implement a conditional to check coprimality of `privateKey` with `N` and `phiOfN` using `isCoPrime` function.
    */
  }
}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
