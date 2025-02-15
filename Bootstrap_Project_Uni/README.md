# Projeto Universitário Bootstrap

Este é um projeto moderno de desenvolvimento web utilizando Bootstrap 5, com uma configuração completa de desenvolvimento incluindo testes, ferramentas de qualidade de código e otimização de compilação.

## 🚀 Como Começar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (vem com o Node.js)
- Um copo de vinho ou cerveja (se for Sagres, start over)

### Instalação

1. Clona este repositório:
```bash
git clone <url-do-teu-repositório>
cd Bootstrap_Project_Uni
```

2. Instala as dependências:
```bash
npm install
```

## 📦 Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento com recarga automática
npm run dev

# Compila o projeto para produção
npm run build

# Inicia o servidor de produção
npm run serve
```

### Testes

```bash
# Executa testes unitários
npm test

# Executa testes em modo de observação (ótimo para desenvolvimento)
npm run test:watch

# Executa testes end-to-end com Cypress
npm run test:e2e
```

### Qualidade do Código

```bash
# Verifica problemas no código
npm run lint

# Formata o código automaticamente
npm run format
```

## 📁 Estrutura do Projeto

```
Bootstrap_Project_Uni/
├── src/                  # Ficheiros fonte
│   ├── js/              # Ficheiros JavaScript
│   └── scss/            # Ficheiros SCSS
├── public/              # Ficheiros estáticos
│   └── dist/            # Ficheiros compilados
├── __tests__/           # Testes unitários
├── cypress/             # Testes E2E
└── .husky/             # Hooks do Git
```

## 🔧 Arquivos de Configuração

### `package.json`
- **O que é**: Ficheiro principal de configuração do Node.js
- **Para que serve**: 
  - Lista todas as dependências do projeto
  - Define os comandos (scripts) que podes executar
  - Guarda informações sobre o projeto

### `.eslintrc.json`
- **O que é**: Configuração do ESLint
- **Para que serve**: 
  - Define regras de qualidade de código
  - Ajuda a encontrar erros comuns
  - Mantém um padrão de código consistente
  - Exemplo: avisa se te esqueceste de um ponto e vírgula

### `.prettierrc`
- **O que é**: Configuração do Prettier
- **Para que serve**: 
  - Formata o teu código automaticamente
  - Mantém um estilo consistente
  - Exemplo: organiza indentação, quebras de linha e espaços

### `.husky/`
- **O que é**: Pasta com configurações do Husky
- **Para que serve**: 
  - Executa verificações antes de cada commit
  - Garante que código problemático não seja commitado
  - Corre testes e formatação automaticamente

### `jest.setup.js`
- **O que é**: Configuração do Jest
- **Para que serve**: 
  - Prepara o ambiente para testes
  - Adiciona funcionalidades extras aos testes
  - Configura como os testes devem correr

## 🛠️ Ferramentas

### esbuild
- **O que é**: Empacotador de JavaScript
- **Para que serve**: 
  - Combina todos os teus ficheiros JS num só
  - Otimiza o código para produção
  - Processa SCSS e outros tipos de ficheiro

### Jest
- **O que é**: Framework de testes
- **Para que serve**: 
  - Testa funções individuais
  - Verifica se o código funciona como esperado
  - Ajuda a encontrar bugs antes de irem para produção

### Cypress
- **O que é**: Ferramenta de teste end-to-end
- **Para que serve**: 
  - Testa a aplicação como um utilizador real
  - Automatiza testes no navegador
  - Verifica se tudo funciona em conjunto

### ESLint
- **O que é**: Analisador de código
- **Para que serve**: 
  - Encontra problemas no código
  - Sugere melhorias
  - Mantém qualidade do código

### Prettier
- **O que é**: Formatador de código
- **Para que serve**: 
  - Formata o código automaticamente
  - Mantém estilo consistente
  - Evita discussões sobre estilo de código

### Bootstrap
- **O que é**: Framework CSS
- **Para que serve**: 
  - Fornece componentes prontos
  - Facilita criar layouts responsivos
  - Acelera o desenvolvimento da interface

## 🌐 Servidor Express

### Visão Geral do `server.js`
O nosso servidor Express é simples mas poderoso. Aqui está como ele funciona:

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
```
- Criamos uma aplicação Express
- Definimos a porta (usa a variável de ambiente PORT ou 3000)

### Funcionalidades Principais

1. **Servir Ficheiros Estáticos**
```javascript
app.use(express.static('public'));
app.use('/dist', express.static('public/dist'));
```
- Serve ficheiros da pasta `public`
- Configura uma rota especial para ficheiros compilados em `/dist`

2. **Rota Principal**
```javascript
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```
- Quando acedes ao site, envia o ficheiro `index.html`
- Utiliza caminhos absolutos para garantir que funciona em qualquer sistema

3. **Iniciar o Servidor**
```javascript
app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});
```
- Inicia o servidor na porta configurada
- Mostra uma mensagem útil no terminal

### Como Usar
1. Desenvolvimento:
   ```bash
   npm run dev
   ```
   - Inicia o servidor
   - Observa alterações nos ficheiros
   - Recarrega automaticamente

2. Produção:
   ```bash
   npm run serve
   ```
   - Inicia apenas o servidor
   - Sem recarga automática
   - Melhor performance

## 💡 Dicas

1. **Comandos Essenciais**:
   ```bash
   npm install    # Instala dependências
   npm run dev    # Inicia ambiente de desenvolvimento
   npm test      # Corre os testes
   npm run lint   # Verifica problemas no código
   ```

2. **Fluxo de Trabalho**:
   - Escreve o teu código
   - Executa `npm run format` para formatar
   - Executa `npm test` para verificar se nada quebrou
   - Faz commit (Husky verificará tudo automaticamente)

3. **Quando Algo Corre Mal**:
   - Lê as mensagens de erro com calma
   - Verifica se todas as dependências estão instaladas
   - Usa `console.log()` para depurar
   - Pede ajuda se precisares!

### "NODE_ENV não é reconhecido no Windows"
1. Este projeto usa `cross-env` para garantir compatibilidade entre sistemas operativos
2. Se vires este erro, certifica-te que:
   ```bash
   # Reinstala as dependências
   npm install
   
   # Se o erro persistir, instala cross-env manualmente
   npm install --save-dev cross-env
   ```
3. Se o problema continuar, tenta executar:
   ```bash
   npx cross-env NODE_ENV=production node esbuild.config.js
   ```

### "Os testes falham no commit"
- Verifica se o Husky está configurado corretamente
- Certifica-te que todos os testes estão passando antes de fazer commit
- Se a cagada é grave, certifica-te de ter um colega a quem culpar

## 🎨 CSS, SASS e Estilos

### Como Personalizar o Bootstrap com SCSS

O nosso projeto utiliza SASS (SCSS) para personalizar o Bootstrap de forma eficiente e organizada. Aqui está um guia detalhado sobre como fazer isso:

#### 1. Estrutura dos Ficheiros SCSS
```scss
src/scss/
├── custom/              # As tuas personalizações
│   ├── _variables.scss  # Substitui variáveis do Bootstrap
│   └── _custom.scss     # Estilos personalizados
└── main.scss           # Ficheiro principal que importa tudo
```

#### 2. Substituir Variáveis do Bootstrap

Para modificar as predefinições do Bootstrap:

1. Cria ou edita `src/scss/custom/_variables.scss`:
```scss
// Cores principais
$primary: #teu-codigo-cor;
$secondary: #teu-codigo-cor;

// Tipografia
$font-family-base: "Tua Fonte", sans-serif;
$font-size-base: 1rem;

// Arredondamento dos cantos
$border-radius: 0.5rem;

// Espaçamento
$spacer: 1rem;
```

2. Importa as variáveis ANTES do Bootstrap em `main.scss`:
```scss
@import "custom/variables";
@import "bootstrap/scss/bootstrap";
```

#### 3. Adicionar Estilos Personalizados

Em `src/scss/custom/_custom.scss`:
```scss
// Sobrescreve classes do Bootstrap
.btn-primary {
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

// Adiciona novas classes
.texto-destaque {
    font-weight: bold;
    color: $primary;
}
```

#### 4. Como Utilizar

1. **Compilação Automática**:
   - Durante desenvolvimento: `npm run dev`
   - Para produção: `npm run build`

2. **Ordem de Importação** (em `main.scss`):
```scss
// 1. Variáveis personalizadas
@import "custom/variables";

// 2. Bootstrap
@import "bootstrap/scss/bootstrap";

// 3. Componentes personalizados
@import "custom/custom";
```

#### 5. Dicas Importantes

- **Evita Sobrescrever Diretamente**: Usa variáveis sempre que possível
- **Organização**: Mantém ficheiros separados por funcionalidade
- **Documentação**: Comenta alterações importantes
- **Mobile First**: Começa pelo mobile e depois adapta para desktop
- **Utiliza Mixins**: Aproveita os mixins do Bootstrap para responsividade:
```scss
@include media-breakpoint-up(md) {
    // Estilos para tablets e superiores
}
```

#### 6. Exemplos Práticos

**Personalizar Botões**:
```scss
// Em _variables.scss
$btn-padding-y: 1rem;
$btn-padding-x: 2rem;
$btn-border-radius: 2rem;

// Em _custom.scss
.btn {
    &-primary {
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    }
}
```

**Sistema de Cores**:
```scss
// Em _variables.scss
$theme-colors: (
    "primary": #tua-cor,
    "secondary": #tua-cor,
    "success": #tua-cor,
    "custom-cor": #tua-cor
);
```

Lembra-te: Após qualquer alteração nos ficheiros SCSS, o sistema de build recompilará automaticamente os estilos. Verifica a consola para possíveis erros de compilação.

## 📝 Licença

Este projeto está licenciado sob a Licença Carlão o Cara (CC4).
