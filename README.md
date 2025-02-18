# User CRUD API

Esta é uma API CRUD de gerenciamento de usuários desenvolvida com Node.js, Express, MongoDB e Mongoose, com autenticação JWT. A API permite criar, ler, atualizar e deletar usuários.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Autenticação](#autenticação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Wirizada/user-crud.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd user-crud
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/seu_banco_de_dados
   JWT_SECRET=sua_chave_secreta_jwt
   PORT=5000
   ```

2. (Opcional) Para gerar uma chave secreta JWT, use o seguinte comando no terminal:

   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'));"
   ```

## Uso

1. Inicie o servidor em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

2. O servidor estará rodando em `http://localhost:3000`.

3. Acesse a documentação interativa do Swagger em `http://localhost:3000/api-docs`.

## Endpoints

### Registro de Usuário

- **URL**: `/api/users/register`
- **Método**: `POST`
- **Descrição**: Registra um novo usuário.
- **Corpo da Requisição**:

   ```json
   {
     "name": "Gabriel Vaz",
     "email": "gabriel.vaz@example.com",
     "password": "supersecret"
   }
   ```

- **Resposta**:
  - **201**: Usuário registrado com sucesso.
  - **400**: Usuário já existe.

- **Exemplo de Resposta**:

   ```json
   {
     "msg": "Usuário registrado com sucesso",
     "newUser": {
       "_id": "60d0fe4f5311236168a109ca",
       "name": "Gabriel Vaz",
       "email": "gabriel.vaz@example.com",
       "password": "supersecret",
       "__v": 0
     }
   }
   ```

### Login de Usuário

- **URL**: `/api/users/login`
- **Método**: `POST`
- **Descrição**: Faz login de um usuário.
- **Corpo da Requisição**:

   ```json
   {
     "email": "gabriel.vaz@example.com",
     "password": "supersecret"
   }
   ```

- **Resposta**:
  - **200**: Login bem-sucedido com token JWT.
  - **400**: Email ou senha inválidos.

- **Exemplo de Resposta**:

   ```json
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   ```

### Obter Todos os Usuários

- **URL**: `/api/users`
- **Método**: `GET`
- **Descrição**: Obtém todos os usuários.
- **Cabeçalho da Requisição**: `x-auth-token: seu_token_jwt`

## Autenticação

Esta aplicação utiliza JWT (JSON Web Token) para autenticação. O token JWT deve ser incluído no cabeçalho da requisição como `x-auth-token`.

## Estrutura do Projeto

```plaintext
user-crud/
   |-- src/
   |   |-- config/
   |   |   |-- db.js
   |   |   |-- swagger.js
   |   |-- controllers/
   |   |   |-- userController.js
   |   |-- models/
   |   |   |-- userModel.js
   |   |-- routes/
   |   |   |-- userRoutes.js
   |   |-- middlewares/
   |   |   |-- authMiddlewares.js
   |   |-- services/
   |   |   |-- userServices.js
   |-- .env
   |-- server.js
```

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)

## Contribuição

Contribuições são bem-vindas! Para contribuir, por favor, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch: `git checkout -b 'branch'`
3. Faça as alterações desejadas e commit: `git commit -m 'contribuição'`
4. Push para a branch: `git push origin 'branch'`
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

