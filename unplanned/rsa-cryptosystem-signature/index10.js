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
![Diagram of RSA digital signing process](RSA signing process diagram.png)

Alice sends her unique signature along with the message to Bob.

Bob then does two things -- first, he decrypts the signature using Alice's public key. Next, he uses Alice's hash function to generate a hash value of the received message.

If the hash value of the received message and the decrypted signature match, then the data is intact and message is really from Alice.

Create an empty function `decryptSignature()`.
*/
