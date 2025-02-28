# Pool Cleaning - Frontend

**Pool Cleaning** é a interface web para gerenciamento de agendamentos de serviços de limpeza de piscina. Desenvolvido com **Next.js**, **React** e **TailwindCSS**, esse projeto visa proporcionar uma experiência de usuário simples e eficiente, com um design moderno e responsivo.

---

## 📌 Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **React**: Biblioteca para a construção da interface de usuário.
- **TypeScript**: Linguagem que traz tipagem estática ao JavaScript.
- **TailwindCSS**: Framework de CSS para desenvolvimento rápido e responsivo.
- **Axios**: Biblioteca para fazer requisições HTTP para o backend.
- **React Hook Form**: Biblioteca para gerenciar formulários de forma fácil e eficiente.

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/gabriel-rocha-pimentel/pool-cleaning.git
cd pool-cleaning-app
```

### 2. Instalar as Dependências

No diretório `pool-cleaning-app`, execute:

```bash
npm install
```

### 3. Configurar o Backend

Certifique-se de que o backend (API) está rodando localmente ou que você tenha acesso a um ambiente de desenvolvimento para interagir com o frontend.

- **Backend**: [Instruções para o Backend](../pool-cleaning-api)

### 4. Rodar o Servidor de Desenvolvimento

Execute o comando abaixo para rodar o servidor de desenvolvimento do Next.js:

```bash
npm run dev
```

Agora o projeto estará rodando localmente em [http://localhost:3000](http://localhost:3000).

---

## 🖥️ Funcionalidades do Frontend

- **Página Inicial**: Exibe uma visão geral e uma introdução ao serviço de limpeza de piscina.
- **Página de Agendamento**: Permite que os usuários agendem serviços de limpeza de piscina, informando data e horário.
- **Página de Login**: Autentica o usuário com a API para garantir acesso aos serviços.
- **Painel do Cliente**: Exibe todos os agendamentos feitos pelo cliente, com a possibilidade de editar ou cancelar.
- **Design Responsivo**: A interface é totalmente responsiva, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

---

## 💻 Estrutura do Projeto

A estrutura do código é organizada da seguinte forma:

```
/pool-cleaning-app
├── /components        # Componentes reutilizáveis
├── /pages             # Páginas do Next.js
├── /public            # Arquivos estáticos
├── /styles            # Estilos com TailwindCSS
├── /utils             # Funções auxiliares
├── /hooks             # Custom React hooks
├── /services          # Comunicação com o backend
├── /contexts          # Contextos do React para gerenciamento de estado global
```

---

## ⚙️ Funcionalidades Futuras

- **Notificações**: Adicionar notificações para informar os usuários sobre o status do agendamento.
- **Autenticação Social**: Implementar login com contas do Google ou Facebook.
- **Histórico de Pagamentos**: Visualização do histórico de pagamentos dos serviços realizados.
- **Melhorias na UI**: Aperfeiçoar a interface de usuário para uma experiência ainda mais fluida.

---

## 👨‍💻 Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

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