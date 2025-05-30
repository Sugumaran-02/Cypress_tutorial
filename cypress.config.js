const { defineConfig } = require("cypress");
const fs = require('fs'); 
const path = require('path')
const Papa = require('papaparse');
const xlsx = require('xlsx')

module.exports = defineConfig({
 reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
    e2e: {

      video:true,
      screenshotOnRunFailure:true,
      screenshotsFolder: 'cypress/screenshots',
      videosFolder:'cypress/video',

    
    "baseUrl": 'https://www.saucedemo.com',
    "defaultCommandTimeout": 10000,
    "experimentalSessionAndOrigin": true, // Important for session handling
    // "reporter": "mochawesome",
    // "reporterOptions": {
    //   "mochaFile": 'cypress/reports/junit/results-[hash].xml',
    // "toConsole": true,
    //   "reportDir": "cypress/reports",
    //   "overwrite": true,
    //   "html": true,
    //   "json": true,
    //   "charts": true
    // },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      on('task', {
        checkFile({ filePath }) {
          const fullPath = path.resolve(filePath); // ✅ Full path handling
          return fs.existsSync(fullPath);           // ✅ Check file existence
        },
        readCsv(filePath) {
          const csvFile = fs.readFileSync(filePath, 'utf8');
          const result = Papa.parse(csvFile, { header: true });
          return result.data;
        },
        readExcel(filePath) {
          //const ExcelFile = fs.readFileSync(filePath, 'utf8');
          const workbook= xlsx.readFile(filePath, {type:'binary'});
          const sheetname= workbook.SheetNames[0];
          const worksheet= workbook.Sheets[sheetname]
          const jsondata= xlsx.utils.sheet_to_json(worksheet)
          return jsondata;
        },
      });
    },
  },
});
