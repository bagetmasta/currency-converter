import React, { useState, useEffect } from 'react';
import { requestOptions, fetchUSD, fetchEUR } from 'utils/api.js';
import { HeaderWrapper } from './Header.styled';

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
      });

    fetch(fetchUSD, requestOptions)
      .then(response => response.json())
      .then(data => {
        const usd = data.rates.UAH;
        setUsd(usd);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <HeaderWrapper>
      <p>USD: {usd ? parseFloat(usd).toFixed(2) : 'loading...'}</p>
      <p>Актуальный курс по отношению к UAH</p>
      <p>EUR: {eur ? parseFloat(eur).toFixed(2) : 'loading...'}</p>
    </HeaderWrapper>
  );
};

export default Header;
