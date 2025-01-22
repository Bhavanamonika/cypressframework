const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require('exceljs');


async function setupNodeEvents(on, config) {
  // Load DB plugin with server, username, pwd details
  config.db = {
    userName: "xxx",
    password: "xxxx",
    server: "xxxxx.database.windows.net",
    options: {
      database: "testdba",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }

  // This is required for the preprocessor to be able to generate JSON reports after each run
  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin(config)],
  }))

  // Add Mochawesome reporter plugin
  require('cypress-mochawesome-reporter/plugin')(on);

  // Add Cucumber preprocessor plugin
  await addCucumberPreprocessorPlugin(on, config);

  // Load DB plugin
  const tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on('task', {
    convertExcelToJson(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result
    }

  });

  on('task',{
   async writeExcelTest({searchText,replaceText,update,filePath}){
 
      const workbook = new ExcelJs.Workbook();
  
  await workbook.xlsx.readFile(filePath)
  
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = await readExcel(worksheet,searchText)
  const cell = worksheet.getCell(output.row,output.column+update.colChange)
  cell.value = replaceText
  return workbook.xlsx.writeFile(filePath).then(()=>
    {
    return true;
  }).catch((error=>{
    return false
  }))
  
  }
  })


  return config;
}

async function readExcel(worksheet,searchText){
  let output= {row:-1,column:-1}
  worksheet.eachRow( (row,rowNumber) =>
      {
            row.eachCell((cell,colNumber)=>
            {
             if(cell.value == searchText )
             {
              output.row=rowNumber
              output.column=colNumber
  
             }
  
            })
  })
  
  return output;
}


module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com/"
  },
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
  },
  projectId: "m98o",
  e2e: {
    setupNodeEvents,

    specPattern: 'cypress/integration/examples/*.js',

    // specPattern: 'cypress/integration/examples/BDD/*.feature',
  },
});