import React from 'react';
import { useDispatch } from 'react-redux';

import { startGame } from '../../store/modules/round/actions'
import { Container } from './styles';

export default function StatusBar( {tema}) {
  
  const dispatch = useDispatch()

  function restart(){
    dispatch(startGame(0))
  }
  
  return (
    <Container tema={tema}>
      <button onClick={restart} > REINICIAR </button>
    </Container>
  );
}
