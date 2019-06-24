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
Suppose Alice sends an encrypted message to Bob using a symmetric key. There's no way for Bob to verify if the sender is Alice. Since anyone with access to that key can send Bob the message and claim to be Alice.

Digital signature is the solution. Alice encrypts `hashValue` of data with his private key called signature. Then Alice sends the signature along with the original data to Bob having Alice's public key. 

Create a empty function `generateSignature()`.
*/
