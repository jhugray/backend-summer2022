async function exportProductData (event) {
  event.preventDefault();
  const response = fetch('/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

  
      // TO DO: Add HEADER, parse category object
      let csvContent = "data:text/csv;charset=utf-8,";
      let csvData = data.map(obj => Object.values(obj));

      csvData.forEach(function(rowArray) {
          let row = rowArray.join(",");
          csvContent += row + "\r\n";
      });

      console.log(csvContent);
      // var encodedUri = encodeURI(csvContent);
      // window.open(encodedUri);


      })
    }
  })

};

document.querySelector('.exportCSV').addEventListener('click', exportProductData);