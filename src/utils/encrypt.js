const crypto = require('crypto')

const secret = process.env.SECRET
const algorithm = 'aes-256-cbc'
// Key length is dependent on the algorithm. In this case for aes256, it is
// 32 bytes (256 bits).
const key = crypto.scryptSync(secret, 'salt', 32)
const iv = Buffer.alloc(16, 0) // Initialization crypto vector

/**
 * Encrypts text
 * @param {string} text - text to encrypt
 */
const encrypt = (text = '') => {
  try {
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
  } catch (error) {
    throw error
  }
}

module.exports = { encrypt }
