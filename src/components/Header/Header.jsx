import React, { useState, useEffect } from 'react';
import { requestOptions, fetchUSD, fetchEUR } from 'utils/api.js';
import { HeaderWrapper, Text, Currency } from './Header.styled';
import Notiflix from 'notiflix';

const Header = () => {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() => {
    fetch(fetchEUR, requestOptions)
      .then(response => response.json())
      .then(data => {
        const eur = data.rates.UAH;
        setEur(eur);
      })
      .catch(error => {
        console.log(error);
        Notiflix.Notify.failure(
          'Sorry, you should reload this page and try again'
        );
      });

    fetch(fetchUSD, requestOptions)
      .then(response => response.json())
      .then(data => {
        const usd = data.rates.UAH;
        setUsd(usd);
      })
      .catch(error => {
        console.log(error);
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
