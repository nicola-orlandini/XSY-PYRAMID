const hello = () => {
  return `
  type Query {
    hello: String
  }
`
}

module.exports = { hello }