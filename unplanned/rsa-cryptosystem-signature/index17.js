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
    /*
    Use an `if` statement to check whether `smallerNum` and `largerNum` can be divided by `i` evenly. 
    If `i` divide both the numbers evenly then they aren't coprime.
    */
  }
}

function generatePrivateKey() {}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
