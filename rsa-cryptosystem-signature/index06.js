function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; i++) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

/*
In `ROT13`, the values of letters were shifted by 13 places. The number 13 is called a key. It was used for both encryption and decryption. This is known as Symmetric key cryptography.

In Asymmetric key cryptography, each user has two different keys - public and private. The public key can be shared with everyone.

Create an empty function `generatePublicKey()`.
*/
