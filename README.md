# 🛠️ Ferramentas API - Loja com Autenticação JWT e Recuperação de Senha

Este projeto é uma API RESTful criada com **Node.js + TypeScript + Express + Prisma + PostgreSQL**, com autenticação via **JWT**, recuperação de senha com **Resend**, e suporte a múltiplos **CRUDs** para simular o fluxo de vendas em uma loja de ferramentas.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **Docker**
- **Resend (envio de e-mails)**
- **Insomnia (testes de API)**

---

## 📦 Estrutura de Diretórios
```bash
src/
├── controllers/
├── routes/
├── services/
├── middlewares/
├── prisma/
│   └── client.ts
├── utils/
├── app.ts
└── server.ts

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

git clone https://github.com/seu-usuario/tools-api.git
cd tools-api

### 2. Instale as dependências

npm install

### 3. Configure as variáveis de ambiente

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/toolsdb
JWT_SECRET=sua_chave_secreta
RESEND_API_KEY=sua_api_key_resend
RESEND_EMAIL_FROM=seu@email.com
FRONTEND_URL=http://localhost:5173

### 4. Suba o banco de dados com Docker

docker-compose up -d

### 5. Configure o Prisma ORM

npx prisma generate
npx prisma migrate dev --name init

### 6. Inicie a aplicação

npm run dev

A API estará rodando em:
📍 http://localhost:3333


## 📦 Endpoints da API

### 🔐 Autenticação
**POST /auth/login** – Realiza login e retorna token JWT
**POST /auth/forgot-password** – Envia link de recuperação via e-mail
**POST /auth/reset-password** – Altera senha com token enviado

### 👤 Usuários
**POST /users** – Cria novo usuário
**GET /users** – Lista todos os usuários
**GET /users/:id** – Retorna usuário por ID
**PUT /users/:id** – Atualiza usuário
**DELETE /users/:id** – Deleta usuário

### 🛠️ Ferramentas
**POST /tools** – Cria ferramenta
Campos: name, value, categoryId, brand, image, description

**GET /tools** – Lista todas as ferramentas
**GET /tools/:id** – Retorna uma ferramenta
**PUT /tools/:id** – Atualiza ferramenta
**DELETE /tools/:id** – Remove ferramenta

### 📦 Estoque
**POST /stock** – Registra movimentação de estoque
Campos: toolId, quantity, date_entrance, date_exit

**GET /stock** – Lista todas movimentações
**GET /stock/:id** – Detalhes por ID
**PUT /stock/:id** – Atualiza movimentação
**DELETE /stock/:id** – Remove movimentação

### 🗂️ Categorias
**POST /categories** – Cria nova categoria (type)
**GET /categories** – Lista categorias
**PUT /categories/:id** – Atualiza categoria
**DELETE /categories/:id** – Deleta categoria
```
## 📌 Requisitos
Node.js 18+
Docker e Docker Compose
PostgreSQL (se não usar Docker)
Conta gratuita no Resend

## 📄 Licença
Este projeto está licenciado sob a licença MIT.

## 🤝 Contribuições
Fique à vontade para abrir uma issue ou PR com melhorias, dúvidas ou sugestões.

## 📬 Contato
Desenvolvido por Jean Carlos Moissa
✉️ jeanmoissa@gmail.com
🔗 linkedin.com/in/jeancarlosmoissa




