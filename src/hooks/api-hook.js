import { requestOptions } from 'api/api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const useCurrencyConverter = () => {
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    Loading.hourglass('Loading...');

    return fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then(response => response.json())
      .then(data => data.info.rate)
      .catch(error => {
        console.log(error);
        Report.failure('Sorry, you should reload this page and try again');
      })
      .finally(() => Loading.remove());
  };

  return { convertCurrency };
};
