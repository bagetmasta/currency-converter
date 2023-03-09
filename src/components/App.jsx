import Header from './Header/Header';
import Converter from './Converter/Converter';

export const App = () => {
  return (
    <>
      <Header />
      <Converter />
    </>
  );
};

// const debounceAmount1 = debounce(value => {
//   setLastChanged('amount1');
//   setAmount1(value);
// }, 500);

// const debounceAmount2 = debounce(value => {
//   setLastChanged('amount2');
//   setAmount2(value);
// }, 500);

// const handleAmount1Change = event => {
//   const { value } = event.target;
//   debounceAmount1(value);
// };

// const handleAmount2Change = event => {
//   const { value } = event.target;
//   debounceAmount2(value);
// };
