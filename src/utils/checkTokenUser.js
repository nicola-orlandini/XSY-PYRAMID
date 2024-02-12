const { users } = require("../mongoDB/model")
const tokenUser = {}

const checkTokenUser = async (nameUser) => {
    try {
        if (!tokenUser[nameUser]) {
            const userModel = await users()
            const userData = await userModel.findOne({ name: nameUser })
            if (!userData) {
                throw new Error(`user not find: ${nameUser}`)
            }
            tokenUser[nameUser] = userData.secret
            return tokenUser[nameUser]
        } else {
            return tokenUser[nameUser]
        }
    } catch (error) {
        console.log(`ERROR getTokenUser - details: ${error.message}`)
    }
}

module.exports = { checkTokenUser }