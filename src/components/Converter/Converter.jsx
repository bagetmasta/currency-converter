import React, { useState, useEffect } from 'react';
import { requestOptions } from 'utils/api';
import debounce from 'lodash.debounce';

const Converter = () => {
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [rate, setRate] = useState('');
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

  useEffect(() => {
    const getRate1 = () => {
      amount1 > 0
        ? fetch(
            `https://api.apilayer.com/exchangerates_data/convert?to=${currency2}&from=${currency1}&amount=${amount1}`,
            requestOptions
          )
            .then(response => response.json())
            .then(data => {
              const rateInfo = data.info.rate;
              setRate(rateInfo.toFixed(4));
              const result = amount1 * rate;

              const debouncesetAmount2 = debounce(
                () => setAmount2(result.toFixed(2)),
                300
              );

              debouncesetAmount2();
            })
            .catch(error => console.log(error))
        : setAmount2('');
    };

    getRate1();
  }, [amount1, currency1, currency2, rate]);

  useEffect(() => {
    const getRate = () => {
      amount2 > 0
        ? fetch(
            `https://api.apilayer.com/exchangerates_data/convert?to=${currency1}&from=${currency2}&amount=${amount2}`,
            requestOptions
          )
            .then(response => response.json())
            .then(data => {
              const rateInfo = data.info.rate;
              setRate(rateInfo.toFixed(4));
              const result = amount2 * rate;

              const debouncedSetAmount1 = debounce(
                () => setAmount1(result.toFixed(2)),
                300
              );

              debouncedSetAmount1();
            })
            .catch(error => console.log(error))
        : setAmount1('');
    };

    getRate();
  }, [amount2, currency1, currency2, rate]);

  const handleAmount1Change = e => {
    setAmount1(e.target.value);
  };

  const handleAmount2Change = e => {
    setAmount2(e.target.value);
  };

  const handleCurrency1Change = e => {
    setCurrency1(e.target.value);
  };

  const handleCurrency2Change = e => {
    setCurrency2(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="number" value={amount1} onChange={handleAmount1Change} />
        <select value={currency1} onChange={handleCurrency1Change}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <input type="number" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
    </div>
  );
};

export default Converter;
