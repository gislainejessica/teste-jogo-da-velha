import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: auto;
  
  height: 100%;
// proprieda que altera Cor do fundo 
  background: ${props => (props.theme === true ? '#100311': '#FFDEAD')}; 
`;
