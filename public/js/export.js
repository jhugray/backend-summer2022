async function exportProductData (event) {
  //function is triggered when user clicks a button, preventdefault stops page from refreshing
  event.preventDefault();
  //fetch request to GET all of the products
  const response = fetch('/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  //data becomes the variable holding the products
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        //set up the csv file format & headers
        let csvContent = "data:text/csv;charset=utf-8,Product ID,Product Name,Price,Stock,Category ID,Category Name\n";
        //parse data into an array, add it to the csvContent in the correct format
        let csvData = data.map(obj => Object.values(obj));
        csvData.forEach(function(rowArray) {
          category_name = rowArray.pop().category_name;
          rowArray.push(category_name);
          let row = rowArray.join(",");
          csvContent += row + "\r\n";
        });

        console.log(csvContent);
        //takes the CSV content, encodes the URI with the data, and then file is opened (to download)
        var encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
      })
    }
  })
};

//event listener  - when user clicks button, exportProductData function is called
document.querySelector('.exportCSV').addEventListener('click', exportProductData);