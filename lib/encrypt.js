const { hash } = require('./utils/hashMethods');

class Encrypt {
    /**
     * Hashes a text using the SHA-1 algorithm.
     * @param {string} text - The plain text to hash.
     * @returns {string} - The hashed text.
     */
    static sha1(text) {
        return hash('sha1', text);
    }

    /**
     * Compares a plain text with a SHA-1 hashed text.
     * @param {string} plainText - The plain text.
     * @param {string} hashedText - The hashed text.
     * @returns {boolean} - True if they match, false otherwise.
     */
    static compareSha1(plainText, hashedText) {
        return hash('sha1', plainText) === hashedText;
    }
}

module.exports = Encrypt;
