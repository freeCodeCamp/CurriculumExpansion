const firstPrime = 3;
const secondPrime = 2;
const N = firstPrime * secondPrime;
const phiOfN = firstPrime - 1;
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
`Φ(N)` known as Euler's totient function is multiplicative which means, `Φ(A * B) = Φ(A) * Φ(B)`.

So, Φ(firstPrime * secondPrime) = Φ(firstPrime) * Φ(secondPrime)
We know, Φ(firstPrime) = (firstPrime - 1) and Φ(secondPrime) = (secondPrime - 1)
Substituting above values we get, Φ(firstPrime * secondPrime) = (firstPrime - 1) * (secondPrime - 1)
N = firstPrime * secondPrime. Hence, Φ(N) = (firstPrime - 1) * (secondPrime - 1)

Set `phiOfN = (firstPrime - 1) * (secondPrime - 1)`. 
*/
