import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  
  // h1 {
  //   color: ${props => props.tema === false ? '#f41142' : '#f41142'};
  //   font-size: 32px;
  // }
  h2 {//muda a cor do titulo "vez do jogador"
    margin-top: 25px;
    color: ${props => props.tema === false ? '#091b28' : '#e4e4e5'};
    font-size: 30px;
    span {
      color: #f41142;
      font-weight: bold;
      font-size: 30px;
    }
  }
`;


export const Tabuleiro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 20px; 
`
