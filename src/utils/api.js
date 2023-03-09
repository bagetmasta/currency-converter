const myHeaders = new Headers();
myHeaders.append('apikey', 'PETc8rQ6V0IHNzOtZs88bBJKxGA7VwBJ');

export const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const fetchUSD = `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH&base=USD`;
export const fetchEUR = `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH&base=EUR`;
// fetch(
//   `https://api.apilayer.com/exchangerates_data/convert?to=${}&from=${}&amount=${}`,
//   requestOptions
// )
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
