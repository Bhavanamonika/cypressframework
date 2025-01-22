const ExcelJs = require('exceljs');

// const workbook = new ExcelJs.Workbook();
// workbook.xlsx.readFile('/Users/mounikapaluri/Documents/CypressLearn1/download.xlsx').then(function(){
// const worksheet = workbook.getWorksheet('Sheet1');
// worksheet.eachRow( (row,rowNumber) =>
//     {
//           row.eachCell((cell,colNumber)=>
//           {

//            console.log(cell.value)


//           })

//     })
// })


async function writeExcelTest(searchText,replaceText,update,filePath){
 
    const workbook = new ExcelJs.Workbook();

await workbook.xlsx.readFile(filePath)

const worksheet = workbook.getWorksheet('Sheet1');
const output = await readExcel(worksheet,searchText)
const cell = worksheet.getCell(output.row,output.column+update.colChange)
cell.value = replaceText
await workbook.xlsx.writeFile(filePath)

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


writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/mounikapaluri/Documents/CypressLearn1/download.xlsx");