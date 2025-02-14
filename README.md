# Projeto da Ana - Bootstrap Project

Um projeto moderno utilizando Bootstrap 5 com esbuild para compilação e um servidor de desenvolvimento Express.

## Requisitos

- Node.js (versão 14 ou superior)
- npm (incluído com Node.js)

## Instalação

```bash
npm install
```

## Comandos Disponíveis

Este projeto inclui os seguintes comandos npm:

### `npm run dev`
- Inicia o ambiente de desenvolvimento
- Compila os ficheiros em modo desenvolvimento
- Inicia o servidor em modo de observação
- Abre o projeto em http://localhost:3000
- Recarrega automaticamente quando há alterações

### `npm run build`
- Compila o projeto para produção
- Minifica os ficheiros CSS e JavaScript
- Gera os ficheiros na pasta `public/dist`
- Otimiza para melhor desempenho

### `npm run serve`
- Inicia apenas o servidor Express
- Útil para testar a versão de produção
- Aceder em http://localhost:3000

### `npm run watch`
- Observa alterações nos ficheiros fonte
- Recompila automaticamente quando deteta alterações
- Não inicia o servidor

## Estrutura do Projeto

```
projeto/
├── public/             # Ficheiros públicos
│   ├── dist/          # Ficheiros compilados (gerados)
│   └── index.html     # Página HTML principal
├── src/
│   ├── js/            # Ficheiros JavaScript
│   │   └── index.js   # Ponto de entrada principal JS
│   └── scss/          # Ficheiros SCSS
│       ├── components/  # Componentes SCSS
│       └── styles.scss # Ponto de entrada principal SCSS
├── esbuild.config.js  # Configuração do esbuild
├── server.js          # Servidor de desenvolvimento
└── package.json       # Dependências e scripts
```

## Desenvolvimento

1. Execute `npm run dev` para iniciar o ambiente de desenvolvimento
2. Edite os ficheiros em `src/`
3. As alterações serão automaticamente compiladas e a página será recarregada

## Produção

1. Execute `npm run build` para criar a versão de produção
2. Os ficheiros compilados estarão em `public/dist/`
3. Teste a versão com `npm run serve`
