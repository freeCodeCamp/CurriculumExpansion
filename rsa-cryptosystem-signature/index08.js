/*
If `publicKey` is used for encryption then only the `privateKey` can decrypt it. Keep in mind that the vice-versa is also true. Therefore, they are referred to as key pairs. 

Create a variable `publicKey` and set it to 0.
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
