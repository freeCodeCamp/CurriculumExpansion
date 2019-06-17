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

/*
Suppose Alice sends an encrypted message to Bob using a symmetric key. There's no way for Bob to verify if the sender is Alice. Since anyone with access to key can send Bob the message and claim to be Alice.

Asymmetric cryptography solves it. Alice encrypts `hashValue` of data with his private key called signature and sends to Bob having public key. Bob decrypts the signature which results in original hash value of data and hashes the received data. If both values are equal then the sender is confirmed to be Alice since for that public key the private key is with Alice only.

Create two functions `generateSignature()` and `decryptSignature()`.
*/
