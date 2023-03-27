import React, { useState, useEffect } from 'react';
import { requestOptions, fetchUSD, fetchEUR } from 'api/api.js';
import { HeaderWrapper, Text, Currency } from './Header.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';

const Header = () => {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() => {
    Promise.all([
      fetch(fetchUSD, requestOptions),
      fetch(fetchEUR, requestOptions),
    ])
      .then(([usdResponse, eurResponse]) =>
        Promise.all([
          usdResponse.json(),
          eurResponse.json(),
          usdResponse.status,
          eurResponse.status,
        ])
      )
      .then(([usdData, eurData, usdStatus, eurStatus]) => {
        if (usdStatus === 429 || eurStatus === 429) {
          throw new Error('Too many requests');
        }
        setUsd(usdData?.rates?.UAH);
        setEur(eurData?.rates?.UAH);
      })
      .catch(error => {
        if (error.message === 'Too many requests') {
          console.log(
            'Error 429: the allowable limit of server requests has been exceeded. Please contact the repository owner to replace the access key.'
          );
          Report.failure(
            'Error 429',
            'The allowable limit of server requests has been exceeded. Please contact the repository owner to replace the access key.'
          );
        } else {
          Report.failure('Sorry, you should reload this page and try again');
        }
      });
  }, []);

  return (
    <HeaderWrapper>
      <Text>Сегодняшний курс по отношению к UAH</Text>
      <Currency>
        USD: {usd ? parseFloat(usd).toFixed(2) : 'loading...'}
      </Currency>
      <Currency>
        EUR: {eur ? parseFloat(eur).toFixed(2) : 'loading...'}
      </Currency>
    </HeaderWrapper>
  );
};

export default Header;
