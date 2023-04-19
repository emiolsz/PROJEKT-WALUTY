// Funkcja pobierająca kursy walut z API NBP
function getExchangeRates(currency) {
    const url = `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => data.rates[0].mid)
      .catch(error => console.error(error));
  }
  
  // Funkcja przeliczająca kwotę na podaną walutę
  function convertCurrency() {
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
  
    getExchangeRates(currency)
      .then(rate => {
        const result = amount * rate;
        const resultElement = document.querySelector('.result');
        resultElement.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} PLN`;
      })
      .catch(error => console.error(error));
  }
  
  // Obsługa przycisku "Przelicz"
  const convertButton = document.getElementById('convert');
  convertButton.addEventListener('click', convertCurrency);
  
  // Pobranie kursów walut na starcie aplikacji
  getExchangeRates('EUR');
  getExchangeRates('USD');
  getExchangeRates('CHF');
  