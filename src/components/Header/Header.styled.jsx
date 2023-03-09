import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  font-family: 'Montserrat';
  text-align: center;
  background: linear-gradient(180deg, #f8a170 0%, #ffcd61 100%);
  padding: 32px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } ;
`;

export const Text = styled.p`
  font-size: 16px;

  @media (min-width: 625px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }

  &:not(:first-child) {
    @media (max-width: 767.98px) {
      margin-top: 16px;
    }
  }
`;

export const Currency = styled(Text)`
  color: green;
`;

export const PageTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 50px;
  font-weight: normal;
  margin-top: 64px;
  margin-bottom: 32px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333;

  @media (min-width: 625px) {
    font-size: 65px;
  }

  @media (min-width: 768px) {
    font-size: 75px;
  } ;
`;
