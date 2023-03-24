import React, { useState, useEffect } from 'react';
import { requestOptions } from 'api/api';
import {
  ConverterWrapper,
  CurrencyWrapper,
  Input,
  Select,
  Loading,
} from './Converter.styled';
import Notiflix from 'notiflix';

const Converter = () => {
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [lastChanged, setLastChanged] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (lastChanged !== 'amount1') {
      updateAmounts('amount1', amount1, currency1, currency2);
    }
  }, [amount1, currency1, currency2, lastChanged]);

  useEffect(() => {
    if (lastChanged !== 'amount2') {
      updateAmounts('amount2', amount2, currency2, currency1);
    }
  }, [amount2, currency1, currency2, lastChanged]);

  const updateAmounts = (type, amount, fromCurrency, toCurrency) => {
    if (amount > 0 && amount !== '') {
      setLoading(true);
      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
        requestOptions
      )
        .then(response => response.json())
        .then(data => {
          const rateInfo = data.info.rate;
          if (type === 'amount1') {
            const result = amount * rateInfo;
            setAmount2(result.toFixed(2));
          } else {
            const result = amount * rateInfo;
            setAmount1(result.toFixed(2));
          }
        })
        .catch(error => {
          console.log(error);
          Notiflix.Notify.failure(
            'Sorry,you should reload this page and try again'
          );
        })
        .finally(() => setLoading(false));
    } else {
      if (type === 'amount1') {
        setAmount2('');
      } else {
        setAmount1('');
      }
    }
  };

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === 'amount1') {
      setLastChanged('amount2');
      setAmount1(value);
    }
    if (id === 'amount2') {
      setLastChanged('amount1');
      setAmount2(value);
    }
    if (id === 'currency1') {
      setLastChanged('amount2');
      setCurrency1(value);
    }
    if (id === 'currency2') {
      setCurrency2(value);
    }
  };

  return (
    <ConverterWrapper>
      <CurrencyWrapper>
        <Input
          id="amount1"
          type="number"
          value={amount1 ? amount1 : ''}
          onChange={handleChange}
          placeholder="Enter..."
        />
        <Select id="currency1" value={currency1} onChange={handleChange}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
      </CurrencyWrapper>
      {loading && <Loading>loading...</Loading>}
      <CurrencyWrapper>
        <Input
          id="amount2"
          type="number"
          value={amount2 ? amount2 : ''}
          onChange={handleChange}
          placeholder="Enter..."
        />
        <Select id="currency2" value={currency2} onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </Select>
      </CurrencyWrapper>
    </ConverterWrapper>
  );
};

export default Converter;
