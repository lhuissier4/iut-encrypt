const Encrypt = require('../lib/encrypt');

describe('Encrypt Module', () => {
    const plainText = 'motdepasse';
    const hashedPassword = Encrypt.sha1(plainText);

    test('should hash a password using SHA-1', () => {
        expect(hashedPassword).toEqual(expect.any(String));
        expect(hashedPassword).toHaveLength(40); // SHA-1 produces 40-character hashes
    });

    test('should compare plain text and hashed password correctly', () => {
        expect(Encrypt.compareSha1(plainText, hashedPassword)).toBe(true);
        expect(Encrypt.compareSha1('wrongpassword', hashedPassword)).toBe(false);
    });
});
