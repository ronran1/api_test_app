document.querySelector('button').addEventListener('click', getStockPrices)
console.log(document.getElementsByTagName('li'))
function getStockPrices() {
    let choice = document.querySelector('input').value
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${choice}&apikey=G0FXED0O9KX71PZX`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        // console.log(data["Time Series (60min)"])
        // console.log(Object.values(data["Weekly Time Series"])[0])
        // console.log(JSON.stringify(Object.keys(data["Weekly Time Series"])[0]));
        for (i = 0; i < document.getElementsByTagName('li').length; i++) {
            document.querySelectorAll('li')[i].innerHTML = `${JSON.stringify(Object.keys(data["Weekly Time Series"])[i])}: ${JSON.stringify(Object.values(data["Weekly Time Series"])[i])}`
        }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}