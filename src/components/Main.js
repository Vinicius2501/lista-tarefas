import React, { Component } from "react";
import { FaEdit, FaWindowClose, FaPlus } from "react-icons/fa";

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
    ],
    index: -1
  };

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
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            type="text"
            onChange={this.handleChange}
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
