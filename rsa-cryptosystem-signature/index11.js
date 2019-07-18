let publicKey = 0;

/*
We'll use the RSA asymmetric cryptographic algorithm to generate key pairs, to encrypt and decrypt data.

RSA is based on the fact that finding prime factors of a large number is difficult.

Create a constant named `firstPrime` and set it to 2.
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
