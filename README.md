# Pool Cleaning

**Pool Cleaning** é um sistema completo para gerenciamento de agendamentos de limpeza de piscina. Criado para facilitar o processo de agendamento e gerenciamento dos serviços solicitados pelos clientes, o sistema permite que o administrador (cliente) visualize e controle todos os agendamentos de forma simples e eficiente.

---

## 📌 Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Backend**: Node.js, TypeScript, Prisma, PostgreSQL
- **Banco de Dados**: PostgreSQL
- **Gerenciamento de Pacotes**: npm
- **Outros**: Prisma ORM, Git

---

## 🔧 Funcionalidades

- **Cadastro de Usuários**: O administrador pode criar, editar e excluir contas de usuários.
- **Agendamento de Limpeza**: Os clientes podem agendar serviços de limpeza de piscina com facilidade.
- **Visualização de Agendamentos**: O administrador pode visualizar todos os agendamentos e seus respectivos status.
- **Autenticação**: Sistema de login e autenticação de usuários.

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/gabriel-rocha-pimentel/pool-cleaning.git
cd pool-cleaning
```

### 2. Instalar as Dependências

#### Para o Backend (API)

```bash
cd pool-cleaning-api
npm install
```

#### Para o Frontend (Aplicação Web)

```bash
cd pool-cleaning-app
npm install
```

### 3. Configurar o Banco de Dados

- Crie um banco de dados PostgreSQL e adicione as credenciais ao arquivo `.env` na pasta `pool-cleaning-api`:

```plaintext
DATABASE_URL=postgresql://username:password@localhost:5432/dbname?schema=public
```

### 4. Executar as Migrations do Prisma

No diretório `pool-cleaning-api`, execute:

```bash
npx prisma migrate dev
```

### 5. Rodar o Servidor de Desenvolvimento

#### Para o Backend:

```bash
cd pool-cleaning-api
npm run dev
```

#### Para o Frontend:

```bash
cd pool-cleaning-app
npm run dev
```

Agora o projeto estará rodando localmente em:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

---

## 📁 Estrutura do Projeto

- **pool-cleaning-api**: Backend da aplicação, responsável por gerenciar a API e o banco de dados.
- **pool-cleaning-app**: Frontend da aplicação, responsável pela interface de usuário e interação com o backend.

---

## ⚙️ Funcionalidades Futuras

- Implementação de notificações para alertar os usuários sobre próximos agendamentos.
- Melhorias na interface de usuário (UI) para uma experiência mais fluida.
- Integração com sistemas de pagamento para facilitar o pagamento dos serviços.

---

## 👨‍💻 Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça os commits necessários (`git commit -am 'Adiciona nova feature'`).
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