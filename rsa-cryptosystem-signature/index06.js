function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; i++) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

/*
In `ROT13` cipher, a modern version of the Caesar Cipher, the value of each letter is shifted by 13 places. So, 13 is called the key in `ROT13`.

13 is a key that is used both for encryption and decryption. Thus, `ROT13` cipher is a type of symmetric key cryptography.

In asymmetric key cryptography, each user has a public and a private key. The public key can be shared with anyone.

Create an empty function `generatePublicKey()`.
*/
