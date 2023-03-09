import styled from 'styled-components';

export const ConverterWrapper = styled.div`
  background-color: white;
  padding: 16px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767.98px) {
    margin-bottom: 16px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #ff7043;
  border-radius: 50%;
  padding: 7px;

  @media (max-width: 767.98px) {
    margin-bottom: 16px;
    width: 102px;
    margin-left: auto;
    margin-right: auto;
  }
`;
