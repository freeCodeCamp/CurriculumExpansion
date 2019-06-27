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
Alice sends the signature along with the original data to Bob. Bob decrypts the received signature with Alice's public key and hashes the received data.

If the hash value of the received data and the decrypted signature match then the signature is authentic and data is intact.

Create an empty function `decryptSignature()`.
Tip: Go back to previous challenge, read it once more and come back. You'll get the idea. 
*/
