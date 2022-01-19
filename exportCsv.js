const fs = require('fs');
const router = require('express').Router();
const { Product, Category } = require('./models');
// const path = require('path');
// const csv = require('csv-parser');
// const { response } = require('express');
// const csv = require('fast-csv');
const data = fetch('/api/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
console.log(data);

// GET /api/products endpoint
const data = router.get('/', (req, res) => {
  //runs the findAll method on the Product model
  Product.findAll({
    //include product's associated cateogry
    include: [
      {
        model: Category,
        //returns only the category name instead of all the category info
        attributes: ['category_name']
      }
    ]
  })
  //returns data in JSON format
  .then(dbProductData => res.json(dbProductData))
  //error handling
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});

console.log(dbProductData)
console.log(data);

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'products.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'surname', title: 'Surname'},
    {id: 'age', title: 'Age'},
    {id: 'gender', title: 'Gender'},
  ]
});

// const data = [
//   {
//     name: 'John',
//     surname: 'Snow',
//     age: 26,
//     gender: 'M'
//   }, {
//     name: 'Clair',
//     surname: 'White',
//     age: 33,
//     gender: 'F',
//   }, {
//     name: 'Fancy',
//     surname: 'Brown',
//     age: 78,
//     gender: 'F'
//   }
// ];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));



// // const Product = require('./models/product');


// // fs.createReadStream(path.resolve(__dirname, 'assets', 'products.csv'))
// //     .pipe(csv.parse({ headers: true }))
// //     // pipe the parsed input into a csv formatter
// //     .pipe(csv.format({ headers: true }))
// //     // Using the transform function from the formatting stream
// //     .transform((row, next) => {
// //         Product.findById(row.id, (err, product) => {
// //             if (err) {
// //                 return next(err);
// //             }
// //             return next(null, {
// //                 id: row.id,
// //                 product_name: row.product_name,
// //                 price: row.price,
// //                 stock: row.stock,
// //                 // properties from product
// //                 // isVerified: product.isVerified,
// //                 // hasLoggedIn: product.hasLoggedIn,
// //                 // age: product.age,
// //             });
// //         });
// //     })
// //     .pipe(process.stdout)
// //     .on('end', () => process.exit());

// async function fetchData() {
//   try {
//     const response = await fetch(`/api/products`, {
//       method: 'GET'
//     }); 
//     const Product = await response.json();
//     return await Product;
//   } catch (error) {
//     console.error(error);
//   } 
  
  

//   // const product = await fetch(`/api/products`, {
//   //   method: 'GET'
//   // });
// }

// async function exportData() {
//   const product = await fetchData;
//   console.log(product);

// //  function writeToCSVFile(product) {
// //   const filename = 'output.csv';
// //   fs.writeFile(filename, extractAsCSV(product), err => {
// //     if (err) {
// //       console.log('Error writing to csv file', err);
// //     } else {
// //       console.log(`saved as ${filename}`);
// //     }
// //   })
// //  };

// //   function extractAsCSV(product) {
// //     const header = ["Id, product_Name, Price, Stock, Category_Id, Category_Name "];
// //     const rows = product.map(Product =>
// //       `${Product.id}, ${Product.product_name}. ${Product.price}, ${Product.stock}, ${Product.category_id}, ${Product.category_name}`
// //     );
// //     return header.concat(rows).join("\n");
// //   };

// //   writeToCSVFile();

// }

// exportData();
