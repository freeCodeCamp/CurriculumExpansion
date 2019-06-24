const firstPrime = 3;
const secondPrime = 5;
const N = firstPrime * secondPrime;
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
Given, `N = 6` it's easy to find the prime factors 3 and 2. But in reality, `N` is around 600 digits long making it almost impossible to find the prime factors.

Note: Developers don't implement RSA and hash functions themselves for production use. They use secure and tested libraries created by expert Cryptographers. Our program is insecure and is only meant for teaching purposes.

Create a constant `phiOfN`.
*/
