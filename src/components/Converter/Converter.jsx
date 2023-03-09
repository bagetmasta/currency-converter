import React, { useState, useEffect } from 'react';
import { requestOptions } from 'utils/api';
import { ConverterWrapper } from './Converter.styled';
// import debounce from 'lodash.debounce';

const Converter = () => {
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [rate, setRate] = useState('');
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [lastChanged, setLastChanged] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (lastChanged !== 'amount1') {
      const getRate1 = () => {
        if (amount1 > 0 && amount1 !== '') {
          setLoading(true);
          fetch(
            `https://api.apilayer.com/exchangerates_data/convert?to=${currency2}&from=${currency1}&amount=${amount1}`,
            requestOptions
          )
            .then(response => response.json())
            .then(data => {
              const rateInfo = data.info.rate;
              setRate(rateInfo.toFixed(4));
              const result = amount1 * rate;
              setAmount2(result.toFixed(2));

              // const debouncesetAmount2 = debounce(() => {
              // }, 1000);

              // debouncesetAmount2();
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        } else {
          setAmount2('');
        }
      };

      getRate1();
    }
  }, [amount1, currency1, currency2, lastChanged, rate]);

  useEffect(() => {
    if (lastChanged !== 'amount2') {
      const getRate2 = () => {
        if (amount2 > 0 && amount2 !== '') {
          setLoading(true);
          fetch(
            `https://api.apilayer.com/exchangerates_data/convert?to=${currency1}&from=${currency2}&amount=${amount2}`,
            requestOptions
          )
            .then(response => response.json())
            .then(data => {
              const rateInfo = data.info.rate;
              setRate(rateInfo.toFixed(4));
              const result = amount2 * rate;
              setAmount1(result.toFixed(2));

              // const debouncesetAmount1 = debounce(() => {
              // }, 1000);

              // debouncesetAmount1();
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        } else {
          setAmount1('');
        }
      };

      getRate2();
    }
  }, [amount2, currency1, currency2, lastChanged, rate]);

  const handleAmount1Change = e => {
    setLastChanged('amount2');
    setAmount1(e.target.value);
  };

  const handleAmount2Change = e => {
    setLastChanged('amount1');
    setAmount2(e.target.value);
  };

  const handleCurrency1Change = e => {
    setLastChanged('amount2');
    setCurrency1(e.target.value);
  };

  const handleCurrency2Change = e => {
    setLastChanged('amount1');
    setCurrency2(e.target.value);
  };

  return (
    <ConverterWrapper>
      <div>
        <input type="number" value={amount1} onChange={handleAmount1Change} />
        <select value={currency1} onChange={handleCurrency1Change}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      {loading && <p>loading...</p>}
      <div>
        <input type="number" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
    </ConverterWrapper>
  );
};

export default Converter;
