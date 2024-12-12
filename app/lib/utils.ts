import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

/**
 * Hashes a password using bcrypt
 * @param password - The plain-text password to hash
 * @returns Hashed password as a string
 */

export async function hashPassword(password: string): Promise<string>{
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
}

/**
 * Verifies a plain-text password against a hashed password
 * @param password - The plain-text password
 * @param hashedPassword - The hashed password to compare against
 * @returns - Returns true if password is verified as hashed and false if not
 */

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean>{
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}