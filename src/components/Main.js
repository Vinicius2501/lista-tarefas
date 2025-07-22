import React, { Component } from "react";
import { FaEdit, FaWindowClose, FaPlus } from "react-icons/fa";

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [

    ]
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (!tarefas.includes(novaTarefa)) {
      const novasTarefas = [...tarefas];

      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
      })
    }
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
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
