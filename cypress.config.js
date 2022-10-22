const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});
