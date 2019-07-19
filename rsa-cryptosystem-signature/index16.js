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
  /*
  To check if two integers are coprime, we start with 2 and check up to the smaller number.

  For example, to check if 12 and 9 are coprime, start from 2 and check until 9 because any integer greater than 9 won't divide 9 evenly.
  
  Create a `for` loop to iterate from 2 up to and including `smallerNum`.
  */
}

function generatePrivateKey() {}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
