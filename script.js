document.querySelector('button').addEventListener('click', getStockPrices)
console.log(document.getElementsByTagName('li'))
function getStockPrices() {
    let choice = document.querySelector('input').value
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${choice}&apikey=G0FXED0O9KX71PZX`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        let ky = Object.keys(data["Weekly Time Series"])
        
        let vals = Object.values(data["Weekly Time Series"])
        console.log(Object.entries(Object.values(data["Weekly Time Series"])[0]))
        // console.log(data["Time Series (60min)"])
        // console.log(Object.values(data["Weekly Time Series"])[0])
        // console.log(JSON.stringify(Object.keys(data["Weekly Time Series"])[0]));
        for (i = 0; i < document.getElementsByTagName('li').length; i++) {
          document.querySelectorAll('li')[i].innerHTML = `${JSON.stringify(ky[i]).replaceAll('"', '')}: ${JSON.stringify(vals[i]).replaceAll('"', ' ').replaceAll('{', '').replaceAll('}', '').replaceAll(',', '<br>')}`
        }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}