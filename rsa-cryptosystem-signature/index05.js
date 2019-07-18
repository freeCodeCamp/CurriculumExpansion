function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; i++) {
    hashValue += message.charCodeAt(i);
  }
  /*
  Hash functions are deterministic, which means they return the same hash value when the same message is passed. 
  Return `hashValue`.
  */
}
