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
  return hashValue;
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
  /*
  To encrypt data using RSA, we use the equation: `encryptedData = (Data ^ privateKey) % N`.
  We need to encrypt `hashValue`, so our `Data` is `hashValue`.

  Return `(hashValue ^ privateKey) % N` using `Math.pow`.
  */
}

function decryptSignature() {}
