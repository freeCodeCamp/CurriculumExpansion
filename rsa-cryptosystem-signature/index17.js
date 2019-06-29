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

/*
If any integer till the `smallerNum` divide both the numbers then they are `not coprime`.
    
Use a conditional to check if `i` divides both `smallerNum` and `largerNum` evenly.
Hint: `smallerNum % i === 0` returns true if `smallerNum` is divisble by `i` else false.
*/

function isCoPrime(smallerNum, largerNum) {
  for (let i = 2; i <= smallerNum; ++i) {}
}

function generatePrivateKey() {}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
