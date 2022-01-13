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
      })
    }
  })
};

document.querySelector('.exportCSV').addEventListener('click', exportProductData);