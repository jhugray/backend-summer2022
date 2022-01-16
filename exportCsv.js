const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { response } = require('express');
// const csv = require('fast-csv');

// const Product = require('./models/product');


// fs.createReadStream(path.resolve(__dirname, 'assets', 'products.csv'))
//     .pipe(csv.parse({ headers: true }))
//     // pipe the parsed input into a csv formatter
//     .pipe(csv.format({ headers: true }))
//     // Using the transform function from the formatting stream
//     .transform((row, next) => {
//         Product.findById(row.id, (err, product) => {
//             if (err) {
//                 return next(err);
//             }
//             return next(null, {
//                 id: row.id,
//                 product_name: row.product_name,
//                 price: row.price,
//                 stock: row.stock,
//                 // properties from product
//                 // isVerified: product.isVerified,
//                 // hasLoggedIn: product.hasLoggedIn,
//                 // age: product.age,
//             });
//         });
//     })
//     .pipe(process.stdout)
//     .on('end', () => process.exit());

async function fetchData() {
  try {
    const response = await fetch(`/api/products`, {
      method: 'GET'
    }); 
    const Product = await response.json();
    return await Product;
  } catch (error) {
    console.error(error);
  } 
  
  

  // const product = await fetch(`/api/products`, {
  //   method: 'GET'
  // });
}

async function exportData() {
  const product = await fetchData;
  console.log(product);

//  function writeToCSVFile(product) {
//   const filename = 'output.csv';
//   fs.writeFile(filename, extractAsCSV(product), err => {
//     if (err) {
//       console.log('Error writing to csv file', err);
//     } else {
//       console.log(`saved as ${filename}`);
//     }
//   })
//  };

//   function extractAsCSV(product) {
//     const header = ["Id, product_Name, Price, Stock, Category_Id, Category_Name "];
//     const rows = product.map(Product =>
//       `${Product.id}, ${Product.product_name}. ${Product.price}, ${Product.stock}, ${Product.category_id}, ${Product.category_name}`
//     );
//     return header.concat(rows).join("\n");
//   };

//   writeToCSVFile();

}

exportData();