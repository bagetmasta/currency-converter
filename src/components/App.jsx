import Header from './Header/Header';
import Converter from './Converter/Converter';
import { PageTitle } from './Header/Header.styled';

export const App = () => {
  return (
    <>
      <Header />
      <Converter />
      <PageTitle>Ukraine</PageTitle>
    </>
  );
};
