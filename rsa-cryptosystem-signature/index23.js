const firstPrime = 2;
const secondPrime = 5;
const N = firstPrime * secondPrime;

/*
`Φ` function is multiplicative which means `Φ(A * B) = Φ(A) * Φ(B)`.

We can say, `Φ(firstPrime * secondPrime) = Φ(firstPrime) * Φ(secondPrime)`.
We know, `N = firstPrime * secondPrime`. 
So, `Φ(N) = Φ(firstPrime) * Φ(secondPrime)`.
We also know, `Φ(firstPrime) = firstPrime - 1` and `Φ(secondPrime) = secondPrime - 1`.
Substituting the above values we get `Φ(N) = (firstPrime - 1) * (secondPrime - 1)` 🎉.

Set `phiOfN` to `(firstPrime - 1) * (secondPrime - 1)`.
*/

const phiOfN = firstPrime - 1;
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
