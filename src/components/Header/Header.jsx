import React, { useState, useEffect } from 'react';
import { requestOptions, fetchUSD, fetchEUR } from 'api/api.js';
import { HeaderWrapper, Text, Currency } from './Header.styled';
import Notiflix from 'notiflix';

const Header = () => {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() => {
    Promise.all([
      fetch(fetchUSD, requestOptions),
      fetch(fetchEUR, requestOptions),
    ])
      .then(([usdResponse, eurResponse]) =>
        Promise.all([usdResponse.json(), eurResponse.json()])
      )
      .then(([usdData, eurData]) => {
        setUsd(usdData?.rates?.UAH);
        setEur(eurData?.rates?.UAH);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Sorry, you should reload this page and try again'
        );
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
