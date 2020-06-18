## Teste Dev Udna

- [ ] 0)  Fazer um fork ou clone do projeto e rodar o projeto localmente

- [ ] 1) O que você melhoraria nesse projeto? Explique brevemente como faria isso

- [ ] 2) Colocar a mensagem de jogador (Vez do jogador) em cima do jogo da velha

- [ ] 3)  Muda as cores do tema dark e light (escolha uma cor qualquer diferente pra cada)

- [ ] 4)  Explique com suas palavras a estrutura de arquivos do projeto

- [ ] 5)  Explique a diferença entre os dois códigos abaixo

```js
  Gameboard.js
  code: 1
  useEffect(()=>{
    setDraw(Array(9).fill(false))
  },[])

  code: 2
  useEffect(() => {
    setWinner(Verifica(tabuleiro))
  }, [tabuleiro])
  
  ```

Caso não consiga resolver alguma das tarefas explique as dificuldades encontradas

- [ ] 6) Faça uma pull request nesse repositório ou mande o link com a solução 


---


## Uma breve desmostração da aplicação 

<img alt="Velha" src="https://github.com/gislainejessica/jogodavelha/blob/master/jogo.png" />


# Jogo da Velha
> Utilizando a biblioteca do React.

## "Dependências"
- `create-react-app` foi usado para criar o projeto
- `styled-components` para fazer a estilização da página
- `react hooks` para lidar com algumas especificidades da aplicação ( useState, useRef, ...)
- `redux` e `react-redux` para lidar com controle de estados
- `reactotron` para debugar e ver as interações do redux em desenvolvimento

## Regras do jogo
1) Cada jogador escolhe uma letra para representar-lhe no jogo (X ou O)
2) Escolhido a letra, um jogador de iniciar o jogo escolhendo um dos 9 espaços do tabuleiro para preencher com sua letra.
3) O próximo jogador segue escolhendo um espaço que ainda não foi preenchido.
4) Ganha quem preencher 3 casas em linha coluna ou diagonal primeiro


### Para rodar a aplicação
É necessario ter instalado, na versão descrita ou superior.

- __NodeJs(v12.11.1)__

- __npm ( 6.11.3 ) ou yarn ( 1.17.3 )__

- Atendendo os requisitos acima, rodar dentro da pasta do projeto o sequinte comando: 
- `yarn start` ou `npm start`.

**Site no ZEIT**
https://jogodavelha-rho-three.now.sh/
