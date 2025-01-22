const crypto = require('crypto');

/**
 * Hashes a text using the specified algorithm.
 * @param {string} algorithm - The hashing algorithm (e.g., sha1, sha256).
 * @param {string} text - The text to hash.
 * @returns {string} - The hashed text.
 */
const hash = (algorithm, text) => {
    return crypto.createHash(algorithm).update(text).digest('hex');
};

module.exports = {
    hash,
};
