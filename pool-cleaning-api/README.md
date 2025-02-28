# Backend - Pool Cleaning API

Este repositório contém a API backend do sistema **Pool Cleaning**, responsável por gerenciar as operações relacionadas ao agendamento de serviços de limpeza de piscina. Ele foi desenvolvido utilizando **Node.js**, **TypeScript**, **Prisma ORM** e **PostgreSQL**.

---

## 📌 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Prisma ORM**: Ferramenta para gerenciamento de banco de dados e consultas de forma intuitiva.
- **PostgreSQL**: Sistema de banco de dados relacional utilizado para armazenar as informações.
- **JWT**: Autenticação baseada em token JSON Web Token.
- **dotenv**: Gerenciamento de variáveis de ambiente.

---

## 🔧 Funcionalidades da API

- **Autenticação de Usuários**: Sistema de login com autenticação via JWT.
- **CRUD de Usuários**: Criação, leitura, atualização e exclusão de usuários (administradores e clientes).
- **CRUD de Agendamentos**: Gerenciamento dos agendamentos de serviços de limpeza de piscina.
- **Validação de Dados**: Utilização de validações para garantir integridade dos dados.
- **Integração com Banco de Dados**: Utiliza o PostgreSQL para persistência de dados de usuários e agendamentos.

---

## 🚀 Como Rodar a API

### 1. Clonar o Repositório

```bash
git clone https://github.com/gabriel-rocha-pimentel/pool-cleaning.git
cd pool-cleaning-api
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Configurar o Banco de Dados

- Crie um banco de dados PostgreSQL e adicione as credenciais ao arquivo `.env`:

```plaintext
DATABASE_URL=postgresql://username:password@localhost:5432/dbname?schema=public
JWT_SECRET=your_jwt_secret_key
```

- Substitua `username`, `password` e `dbname` pelas credenciais do seu banco de dados PostgreSQL. 
- A chave `JWT_SECRET` é uma string secreta usada para assinar os tokens JWT. Defina uma chave segura.

### 4. Executar as Migrations do Prisma

Execute o seguinte comando para configurar o banco de dados:

```bash
npx prisma migrate dev
```

Isso criará as tabelas necessárias no seu banco de dados.

### 5. Rodar o Servidor

Para rodar a API localmente, execute:

```bash
npm run dev
```

Agora a API estará rodando no endereço `http://localhost:5000`.

---

## 📁 Estrutura do Projeto

```
pool-cleaning-api/
│
├── src/
│   ├── controllers/         # Funções para lidar com as requisições HTTP
│   ├── routes/              # Definições de rotas da API
│   ├── services/            # Lógica de negócios (camada intermediária)
│   ├── models/              # Modelos de dados e validações
│   ├── middlewares/         # Funções intermediárias (ex: autenticação)
│   ├── utils/               # Funções auxiliares
│   ├── prisma/              # Configurações do Prisma ORM
│   └── app.ts               # Arquivo principal de configuração da aplicação
│
├── .env                     # Variáveis de ambiente
├── prisma/                  # Pasta para o esquema do Prisma e migrations
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

---

## 📚 Endpoints da API

A API oferece os seguintes endpoints:

### **POST** `/auth/login`
- **Descrição**: Realiza o login do usuário e retorna um token JWT.
- **Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "senha"
    }
    ```

### **GET** `/users`
- **Descrição**: Retorna todos os usuários registrados.
- **Autenticação**: Requer JWT.
  
### **POST** `/users`
- **Descrição**: Cria um novo usuário.
- **Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "senha",
      "role": "admin"
    }
    ```

### **GET** `/appointments`
- **Descrição**: Retorna todos os agendamentos.
- **Autenticação**: Requer JWT.

### **POST** `/appointments`
- **Descrição**: Cria um novo agendamento de serviço de limpeza de piscina.
- **Body**:
    ```json
    {
      "userId": 1,
      "date": "2025-03-01T09:00:00",
      "serviceType": "standard"
    }
    ```

---

## ⚙️ Funcionalidades Futuras

- Implementação de recursos de envio de e-mails de confirmação de agendamentos.
- Melhoria na autenticação com OAuth2.
- Implementação de filtros e busca nos agendamentos.
- Testes automatizados para endpoints da API.

---

## 👨‍💻 Contribuição

Se você deseja contribuir com este repositório, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça seus commits (`git commit -am 'Adiciona nova feature'`).
4. Envie sua branch para o repositório remoto (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request para a branch principal.

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 💬 Contato

- **Autor**: Gabriel Rocha
- **E-mail**: gabrielrochapimentel.dev@gmail.com
- **GitHub**: [https://github.com/gabriel-rocha-pimentel](https://github.com/gabriel-rocha-pimentel)