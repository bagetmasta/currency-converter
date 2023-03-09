import React, { useState, useEffect } from 'react';
import { requestOptions, fetchUSD, fetchEUR } from 'utils/api.js';
// import axios from 'axios';

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
    <header>
      <p>USD: {usd ? parseFloat(usd).toFixed(2) : 'loading...'}</p>
      <p>EUR: {eur ? parseFloat(eur).toFixed(2) : 'loading...'}</p>
    </header>
  );
};

export default Header;
