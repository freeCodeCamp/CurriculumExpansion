const firstPrime = 2;
const secondPrime = 5;
let publicKey = 0;

/*
Create a constant `N` and set it as `firstPrime * secondPrime`. 
`N` will be used to generate both private and public keys. 

Here, `N = 10`. So, it's easy to find the prime factors: 2 and 5. 
But in real world usage `N` is around 600 digits long, which makes prime factorization almost impossible. 

Our implementation is insecure, and is just to teach you about the fundamentals of asymmetric cryptography.
*/

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
