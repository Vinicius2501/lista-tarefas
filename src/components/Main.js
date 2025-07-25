import React, { Component } from "react";

import Form from "./Form";
import Tarefas from "./Tarefas";


import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
    ],
    index: -1
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas })
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefa) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    console.log(index)

    const novasTarefas = [...tarefas];

    if (index === -1) {
      if (tarefas.includes(novaTarefa) || novaTarefa === '') return;
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      })
    } else {
      novasTarefas[index] = novaTarefa
      this.setState({
        tarefas: [...novasTarefas],
        novaTarefa: '',
        index: -1
      })
    }
  }

  handleEdit = (e, index) => {
    e.preventDefault();
    const { tarefas } = this.state;
    console.log(index)
    this.setState({
      index,
      novaTarefa: tarefas[index]
    })
  }

  handleDelete = (e, index) => {
    e.preventDefault();
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas]


    novasTarefas.splice(index, 1)
    this.setState({
      tarefas: [...novasTarefas]
    })
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
