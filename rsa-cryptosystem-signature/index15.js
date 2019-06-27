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

function generatePrivateKey() {}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}

/*
Two integers are coprime if the only positive integer that divides both of them simultaneously is 1.

E.g. 10 and 7 are coprime.
2 and 5 divides 10 but not 7. Hence, they both are only divisible by 1.

Create an empty function `isCoPrime` with two integer parameters.
*/
