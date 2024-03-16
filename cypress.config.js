const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
         on('task', {downloadFile})
      }
    }
})