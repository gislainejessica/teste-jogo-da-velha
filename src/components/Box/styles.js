import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    height: 100px;
    width: 100px;
    background: ${props => props.tema === true ? '#e5e5e5'  : '#091b28'};
  //Cor das Letras X ou O
    :only-child {
      color: ${props => (props.tema ? '#000080' : '#ffff7f')}; 
      font-size: 50px;
      font-weight: bold;
    }
  }
`;
