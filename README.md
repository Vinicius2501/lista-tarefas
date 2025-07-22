[PR-BR]
# 🎓 Lista de Tarefas — React

Este projeto é uma **aplicação React simples** para **criar, editar e excluir uma lista de tarefas**, com persistência no `localStorage` do navegador. Foi desenvolvido como exercício prático do **módulo 14: React com Componentes de Classe** do curso:

> *"Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns"*
> Autor: Luiz Otávio Miranda

---

## Funcionalidades

- **Adicionar** novas tarefas, evitando duplicatas e entradas vazias.
- **Editar** tarefas existentes.
- **Excluir** tarefas individualmente.
- Dados são armazenados localmente no browser via **localStorage**, garantindo persistência entre sessões.
- Interface simples e intuitiva com React Class Components.
- Ícones funcionais para ações, utilizando a biblioteca `react-icons`.

---

## Tecnologias e bibliotecas utilizadas

- React 19 (com componentes de classe)
- react-icons (para ícones edit e delete)
- PropTypes (validação de props)
- CSS modular para estilização dos componentes
- LocalStorage para persistência de dados
- ESLint + Prettier para qualidade e padronização do código

---

## Como rodar

1. Clone o repositório
2. Execute `npm install` para instalar dependências
3. Execute `npm start` para rodar o app no modo desenvolvimento
4. Abra `http://localhost:3000` no navegador

---

## Observações técnicas

- O estado da aplicação é mantido no componente `Main`, incluindo a lista de tarefas e o índice da tarefa em edição.
- Utiliza o método `componentDidMount` para carregar tarefas do localStorage e `componentDidUpdate` para salvar alterações.
- O método `handleDelete` manipula a remoção da tarefa no estado de forma imutável.
- Validação simples evita inclusão de tarefas vazias ou repetidas.
- PropTypes garantem tipagem mínima para componentes funcionais.

---

## Referência

> Curso completo de Luiz Otávio Miranda disponível em Udemy:
> *Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns*


[EN]
# 🎓 Task List — React

This project is a **simple React application** to **create, edit, and delete a task list**, with data persistence in the browser's `localStorage`. It was developed as a practical exercise from **módulo 14: React com Componentes de Classe** of the course:

> *"Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns"*
> Author: Luiz Otávio Miranda

---

## Features

- **Add** new tasks, avoiding duplicates and empty entries.
- **Edit** existing tasks.
- **Delete** tasks individually.
- Data is stored locally in the browser via **localStorage**, ensuring persistence between sessions.
- Simple and intuitive interface using React Class Components.
- Functional icons for actions using the `react-icons` library.

---

## Technologies and libraries used

- React 19 (with class components)
- react-icons (for edit and delete icons)
- PropTypes (for prop validation)
- Modular CSS for component styling
- LocalStorage for data persistence
- ESLint + Prettier for code quality and formatting

---

## How to run

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the app in development mode
4. Open `http://localhost:3000` in your browser

---

## Technical notes

- The application state is managed in the `Main` component, including the task list and the index of the task being edited.
- Uses `componentDidMount` to load tasks from localStorage and `componentDidUpdate` to save changes.
- The `handleDelete` method handles task removal immutably.
- Simple validation prevents adding empty or duplicate tasks.
- PropTypes provide minimal type checking for functional components.

---

## Reference

> Full course by Luiz Otávio Miranda available on Udemy:
> *Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns*
