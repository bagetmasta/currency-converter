const myHeaders = new Headers();
myHeaders.append('apikey', 'PETc8rQ6V0IHNzOtZs88bBJKxGA7VwBJ');

export const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const fetchUSD = `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH&base=USD`;
export const fetchEUR = `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH&base=EUR`;

