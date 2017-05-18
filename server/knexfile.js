// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gClassified_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/gClassified_test'
  },
  production: { }
}
