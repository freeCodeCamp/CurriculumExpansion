function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

/*
In Caesar's cipher project, one key was used for both encryption and decryption. This is known as Symmetric key cryptography.

In Asymmetric key cryptography, there are two keys or a key pair - public and private. Public key is open to all and private key is known to sender only.

Create two functions `generatePrivateKey()` and `generatePublicKey()`.
*/
