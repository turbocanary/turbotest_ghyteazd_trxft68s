const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is now cryptographically secure
  var suffix = crypto.randomBytes(4).toString('hex'); // 8 hex characters
  var password = "sssAAAA" + suffix;
  return password;
}