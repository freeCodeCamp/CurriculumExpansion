function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
}

/*
Hash functions should always return the same hash value when same message is passed.

Return `hashValue`.
*/
