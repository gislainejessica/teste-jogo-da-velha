## Teste de conhecimento em React

- [x] 0)  Fazer um fork ou clone do projeto e rodar o projeto localmente

- [x] 1) O que você melhoraria nesse projeto? Explique brevemente como faria isso
      Fazer o sistema mostrar, quem venceu o jogo e limpar a tela após exibir a mensagem, tal função já foi implementada no jogo.
      Criar um banner onde o usuário poderá informa as regras do jogo, criaria uma pagina anterior a Home.
      Bloquear usuário de continuar a jogar após, foi implementado função para reiniciar o game após mensagem de vencedor.
      

- [x] 2) Colocar a mensagem de jogador (Vez do jogador) em cima do jogo da velha

- [x] 3)  Muda as cores do tema dark e light (escolha uma cor qualquer diferente pra cada)

- [ ] 4)  Explique com suas palavras a estrutura de arquivos do projeto
        
        * Na pasta src está todo codigo excencial para que o game funcione.
         
         * na pasta assets existe as imagens utiliadas para logo do modo escuro e claro,
         
         * na pasta components os arquivos que podem ser usados mais de uma vez na aplicação.
         
          Dentro da pagina components existem:
          Pasta Box -> é o component que redenriza o tabuleiro da DOM  e estilos
          Pasta GameBord -> é o component que renderiza os textos de vez do jogador e seus estilos
          Pasta header -> é o component onde é redenrizado a logo e estilos.
          Pasta Slide -> é o component que renderiza o botão de mudança de tema e seus estilos.
          Pasta StatusBar ->  é o component que renderiza o botão de reiniciar o jogo e seus estilos.

          *A pasta config. está os arquivos de configuração do reactotron

          *Pasta pages fica a pagina home que importa os components para o game.
          
          *A pasta store pelo que entendi tem haver com a logica porém não entendi ao certo seu funcionamento.

          *A pasta Styles é onde foi aplicado a estilização global do game.

          *A pasta utils é onde fica as regras do game onde é definida as condições de vitória.

- [x] 5)  Explique a diferença entre os dois códigos abaixo

```js
  Gameboard.js
  code: 1 -> desenha um tabuleiro em branco e também altera usando um array de 9 posições.
  useEffect(()=>{
    setDraw(Array(9).fill(false))
  },[])

  code: 2 -> atualiza a cada rodada procurando se exite um ganhador a cada jogada.
  useEffect(() => {
    setWinner(Verifica(tabuleiro))
  }, [tabuleiro])
  
  ```

Caso não consiga resolver alguma das tarefas explique as dificuldades encontradas

- [x] 6) Faça uma pull request nesse repositório ou mande o link com a solução 

---


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
https://angry-nightingale-f26582.netlify.app/
