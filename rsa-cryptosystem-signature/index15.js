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
Two integers are coprime if the only positive integer that divides both of them simultaneously is 1.

For example, 10 can be divided evenly by 2 and 5. But 7 can't be divided evenly by 2 and 5.
10 and 7 both are only divisible by 1. Hence, 10 and 7 are coprime.

Create an empty function named `isCoPrime` with `smallerNum` and `largerNum` as parameters.
*/

function generatePrivateKey() {}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
