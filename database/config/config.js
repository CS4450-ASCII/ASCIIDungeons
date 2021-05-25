require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    use_env_variable: 'DEV_DATABASE_URL'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    use_env_variable: 'TEST_DATABASE_URL'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL'
  }
};
