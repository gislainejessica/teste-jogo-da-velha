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
