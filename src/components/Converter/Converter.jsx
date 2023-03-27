import React, { useState, useEffect, useCallback } from 'react';
import {
  ConverterWrapper,
  CurrencyWrapper,
  Input,
  Select,
} from './Converter.styled';
import { useCurrencyConverter } from 'hooks/api-hook';

const Converter = () => {
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [lastChanged, setLastChanged] = useState('');
  const { convertCurrency } = useCurrencyConverter();

  const fetchAPI = useCallback(
    (type, amount, fromCurrency, toCurrency) => {
      if (amount > 0) {
        return convertCurrency(amount, fromCurrency, toCurrency).then(
          convertedRate => {
            const result = amount * convertedRate;
            if (type === 'amount1') {
              setAmount2(result.toFixed(2));
            } else {
              setAmount1(result.toFixed(2));
            }
          }
        );
      } else {
        if (type === 'amount1') {
          setAmount2('');
        } else {
          setAmount1('');
        }
      }
    },
    [convertCurrency]
  );

  useEffect(() => {
    if (amount1 && currency1 && currency2 && lastChanged !== 'amount1') {
      fetchAPI('amount1', amount1, currency1, currency2);
    } else if (amount2 && currency1 && currency2 && lastChanged !== 'amount2') {
      fetchAPI('amount2', amount2, currency2, currency1);
    }
  }, [
    amount1,
    currency1,
    currency2,
    lastChanged,
    convertCurrency,
    setAmount2,
    amount2,
    fetchAPI,
  ]);

  const handleChange = e => {
    const { id, value } = e.target;

    switch (id) {
      case 'amount1':
        setLastChanged('amount2');
        setAmount1(value);
        break;
      case 'amount2':
        setLastChanged('amount1');
        setAmount2(value);
        break;
      case 'currency1':
        setLastChanged('amount2');
        setCurrency1(value);
        break;
      case 'currency2':
        setCurrency2(value);
        break;
      default:
        break;
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
