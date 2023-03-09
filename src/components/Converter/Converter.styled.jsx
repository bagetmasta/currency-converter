import styled from 'styled-components';

export const ConverterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 16px;
  font-size: 19px;
  font-weight: bold;

  & > div {
    display: flex;
    flex-direction: column;
    margin: 0 16px;
  }

  & input {
    width: 160px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  & select {
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 8px;
  }

  & p {
    margin-top: 8px;
  }
`;
