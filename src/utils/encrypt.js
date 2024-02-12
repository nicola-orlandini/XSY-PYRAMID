const crypto = require('crypto')
const algorithm = 'aes-256-cbc'
const iv = Buffer.alloc(16, 0)
const key = crypto.scryptSync(process.env.SECRET, 'salt', 32)

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
