const signBtn = document.querySelector("#sign-btn");
const transmitBtn = document.querySelector("#transmit-btn");
const verifyBtn = document.querySelector("#verify-btn");
const messageBox = document.querySelector("#message-to-be-sent");
const receivedMessageBox = document.querySelector("#received-message");
const generatedSignature = document.querySelector("#generated-signature");
const receivedSignature = document.querySelector("#received-signature");
const verificationStatus = document.querySelector("#verification-status");

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
  return hashValue % N === 0 ? 1 : hashValue % N;
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
  return Number(
    BigInt(BigInt(digitalSignature) ** BigInt(publicKey)) % BigInt(N)
  );
}

signBtn.addEventListener("click", function() {
  let hashValue = hashTheMessage(messageBox.value);
  let privateKey = generatePrivateKey();
  generatePublicKey(privateKey);

  generatedSignature.innerText = generateSignature(
    hashValue,
    privateKey
  ).toString();

  transmitBtn.disabled = false;
});

messageBox.addEventListener("input", function() {
  generatedSignature.innerText = "none";
  transmitBtn.disabled = true;
});

transmitBtn.addEventListener("click", function() {
  receivedMessageBox.value = messageBox.value;
  receivedSignature.innerText = generatedSignature.textContent;
  verificationStatus.innerText = "";
  verifyBtn.disabled = false;
});

verifyBtn.addEventListener("click", function() {
  let hashValue = hashTheMessage(receivedMessageBox.value);
  let decryptedSignature = decryptSignature(
    parseInt(receivedSignature.textContent)
  );

  if (hashValue === decryptedSignature) {
    verificationStatus.innerText =
      "Success! Signature is verified and data is intact.";
  } else {
    verificationStatus.innerText =
      "Failure! Something is wrong with data or signature.";
  }
});
