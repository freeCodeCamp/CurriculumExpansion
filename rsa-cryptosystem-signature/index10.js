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

/* 
Bob decrypts the received signature with Alice's public key which results in original hash value of data and hashes the received data. If both hash values are equal then the sender is confirmed to be Alice.

Create a empty function `decryptSignature()`.
*/
