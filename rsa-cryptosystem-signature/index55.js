const firstPrime = 2;
const secondPrime = 5;
const N = firstPrime * secondPrime;
const phiOfN = (firstPrime - 1) * (secondPrime - 1);
let publicKey = 0;

function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue % N;
}

function isCoPrime(smallerNum, largerNum) {
  for (let i = 2; i <= smallerNum; ++i) {
    if (smallerNum % i === 0 && largerNum % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrivateKey() {
  for (let privateKey = 2; privateKey < phiOfN; ++privateKey) {
    if (isCoPrime(privateKey, N) && isCoPrime(privateKey, phiOfN)) {
      return privateKey;
    }
  }

  console.log("Private key can't be generated.");
  return 0;
}

function generatePublicKey(privateKey) {
  while (privateKey) {
    if ((publicKey * privateKey) % phiOfN === 1 && privateKey !== publicKey) {
      return;
    }
    ++publicKey;
  }

  console.log("Public key can't be generated.");
}

function generateSignature(hashValue, privateKey) {
  return Math.pow(hashValue, privateKey) % N;
}

function decryptSignature(digitalSignature) {
  return Math.pow(digitalSignature, publicKey) % N;
}

function sendMsgToBob(message) {
  const privateKey = generatePrivateKey();
  generatePublicKey(privateKey);
  const hashValue = hashTheMessage(message);
  console.log("Original hash value =", hashValue);
  const generatedSignature = generateSignature(hashValue, privateKey);
  sendAndVerify(generatedSignature, message);
}

function sendAndVerify(digitalSignature, message) {
  message = message + "Z";
  const hashValue = hashTheMessage(message);
  console.log("New hash value =", hashValue);
  const decryptedSignature = decryptSignature(digitalSignature);
  if (hashValue === decryptedSignature) {
    console.log("Success! Data is intact and signature is verified.");
  } else {
    console.log("Failure! There's something wrong with data or signature.");
  }
}

sendMsgToBob("Hey Bob, I'm Alice here. Bob, Buy 300 shares of TSLA!");

/*
`console.log` tells us that the original hash value and the new hash value are same!
When two different messages or data result in the same hash value, we call it a hash collision.
Good hash functions have negligible chance of collision. 
Our implementation is insecure and it was just to teach you the basics of hash functions.

If you are working on a real app then you don't need to implement a hash function or RSA algorithm yourself. You should always use existing hash functions and cryptographic libraries like OpenSSL created by expert cryptographers.

Happy coding <3 and stay secure!
*/
