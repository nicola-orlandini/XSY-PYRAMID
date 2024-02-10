const getRoutePath = (filename) => {
  try {
    return filename.split('route').pop().replace('.js', '')
  } catch (error) {
    throw new Error(`ERROR getRoutePath - ${error.message}`)
  }
}

module.exports = { getRoutePath }