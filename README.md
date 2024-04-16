<p align="center">
 <a href="#-about">About</a> |
 <!-- <a href="#-funcionalidades">Funcionalidades</a> | -->
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
</p>


## 💻 About

API Desenvolvida em Node.JS para aplicativo de gestão de treinos e acompanhamentos para Personal Trainer

---

## ⚙️ Requisitos propostos
- [x] Cadastro de Usuário
- [x] Autênticação
- [x] Registro de treino
- [x] Deletar Usuário
- [x] Avaliar Personal
- [x] Cadastro de Aluno
- [x] Cadastro de Treino
- [x] Consulta de Treinos

---

## 🚀 How it works

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

### 🎲 Rodando a API + DB

```bash
# Clone este repositório
$ git clone git@github.com:felmp/node-api-treinow.git
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm start
# O servidor inciará na porta:3000 - acesse a API por http://localhost:3000 
```

* Para iniciar o banco de dados do projeto

```bash
$ npm run migration:run
```

### 🎲 Endpoints

#### Criação e Autenticação

##### Criação de Usuário

- (POST) '/account/create'

- Segue abaixo exemplo de como deve ser enviado no corpo da requisição

```bash
  {
    "nome": "João",
    "email": "joao@treinow.com.br",
    "documento": "11111111111",
    "tipo": 1,
    "senha": "123456"
  }
```

- **Obs: PersonalTrainer - 0 | Aluno - 1** 

##### Autenticação

- (POST) '/auth'

- Segue abaixo exemplo de como deve ser enviado no corpo da requisição

```bash
  {
    "email": "joao@treinow.com.br",
    "senha": "123456"
  }
```
- **Obs: Nessa requisição irá retornar um bearer token, esse token servirá de autenticação nas demais rotas, dependendo sempre do tipo de usuário** 

#### Personal

##### Cadastro de aluno

- (POST) '/personal/student'

- Segue abaixo exemplo de como deve ser enviado no corpo da requisição

- **Obs: Envie o token de autenticação no cabeçalho da requisição** 

```bash
  {
    "aluno_id": 2
  }
```

##### Cadastro de treino

- (POST) '/personal/workout'

- Segue abaixo exemplo de como deve ser enviado no corpo da requisição

- **Obs: Envie o token de autenticação no cabeçalho da requisição** 

```bash
  {
    "nome": "Peito",
    "duracao": "30m"
  }
```

##### Listagem de treino

- (GET) '/personal/workout'

- **Obs: Envie o token de autenticação no cabeçalho da requisição**


#### Aluno

##### Registro de treino

- (POST) '/store/workout'

- Segue abaixo exemplo de como deve ser enviado no corpo da requisição

- **Obs: Envie o token de autenticação no cabeçalho da requisição** 

```bash
  {
    "treino_id": 3,
    "data_hora_inicio": "2022-02-25 18:00"
  }
```

##### Avaliar personal

- (POST) '/personal/:id/rating'

- Segue abaixo exemplo de como deve ser enviado no corpo da requisição

- **Obs: Envie o token de autenticação no cabeçalho da requisição** 

```bash
  {
    "avaliacao": 4
  }
```

##### Deletar conta

- (DELETE) '/account/delete'

- **Obs: Envie o token de autenticação no cabeçalho da requisição**

---

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **API**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express Async Error](https://www.npmjs.com/package/express-async-errors)**
-   **[BCrypt](https://www.npmjs.com/package/bcrypt)**
-   **[JsonWebToken](https://jwt.io/)**
-   **[Express](https://expressjs.com/pt-br/)**
-   **[TypeORM](https://typeorm.io/)**
-   **[dotENV](https://www.npmjs.com/package/dotenv)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**


Feito por Francisco Felipe 👋🏽 [Entre em contato!](https://www.linkedin.com/in/francisco-felipe-ferreira-de-sousa-a5342522b/)

---
