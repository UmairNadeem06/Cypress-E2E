const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    env: {
      registerUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    }
  }
});
