const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":20000,
    "pageLoadTimeout": 120000, 
    //"viewportWidth": 820,
    //"viewportHeight": 1180,
    "retries" : {"runMode":1},

    env: {

        "url2": "www.xyz.com",
        "username": "Admin",
        "password": "admin123"

    },


    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
