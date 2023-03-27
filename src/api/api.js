const myHeaders = new Headers();
myHeaders.append('apikey', 'dIbXJ2IYCGmpi9L1Gn1gFC2CCrzuEm5V');

export const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const fetchUSD = `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH&base=USD`;
export const fetchEUR = `https://api.apilayer.com/exchangerates_data/latest?symbols=UAH&base=EUR`;
