const crypto = require('crypto')
const algorithm = 'aes-256-cbc'
const iv = Buffer.alloc(16, 0)
const key = crypto.scryptSync(process.env.SECRET, 'salt', 32)

const decrypt = (text = '') => {
  try {
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decrypted = decipher.update(text, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (error) {
    throw error
  }
}

module.exports = { decrypt }
