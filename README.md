# Grand Theft Auto VI - Aplicação React

Descrição

Este projeto é uma aplicação React que utiliza a biblioteca React Router DOM para criar uma SPA (Single Page Application) que apresenta informações sobre o jogo Grand Theft Auto VI (GTA 6). A aplicação inclui:

1.Página inicial com informações sobre o jogo.

2.Galeria de imagens do jogo.

3.Descrição da história e ambientação.

4.Página sobre vazamentos de informações do jogo.

## Funcionalidades

Estrutura da Aplicação

A aplicação utiliza rotas para navegação entre as páginas:

Início (/): Contém informações gerais sobre o jogo, como data de lançamento e trailer.

Galeria (/gallery): Apresenta imagens exclusivas do jogo.

História (/story): Detalha a ambientação e narrativa do jogo.

Vazamentos (/lore): Mostra informações sobre vazamentos de dados e vídeos do jogo.

## Tecnologias Utilizadas

React: Biblioteca JavaScript para criação de interfaces de usuário.

React Router DOM: Gerenciamento de rotas para SPA.

CSS: Estilização da aplicação.

useState: Hook do React para gerenciamento de estado interno (aba ativa).

## Estrutura do Código

Arquivo App.js

Este é o ponto de entrada principal da aplicação.

![alt text](<Captura de tela 2025-01-17 201503.png>)



## App: Componente principal que define as rotas e navegação.

export default App;

Componentes Secundários (Home, Gallery, Story):

Cada componente é renderizado em sua respectiva rota.

![alt text](<Captura de tela 2025-01-17 202017.png>)

## Como Rodar o Projeto

### Pré-requisitos

Node.js instalado.

Gerenciador de pacotes npm ou yarn.

### Passos

Clone o repositório:

git clone https://github.com/seu-repositorio.git

Navegue até o diretório do projeto:

cd gta6-react-app

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm start

Acesse o projeto em http://localhost:5173/

## Estrutura de Arquivos

![alt text](<Captura de tela 2025-01-17 201010.png>)

## Melhorias Futuras

Adicionar animações para a transição entre páginas.

Implementar carregamento dinâmico de imagens na galeria.

Otimizar a responsividade da aplicação.