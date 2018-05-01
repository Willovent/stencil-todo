import { Component, State } from '@stencil/core';
import { Todo } from '../models/todo';


@Component({
  tag: 'my-todo',
  styleUrl: 'todo.scss'
})
export class TodoComponent {

  @State() public todos: Todo[] = [
    { name: 'Faire une todo-list en StencilJs', check: true },
    { name: 'Poster la todo-list sur github', check: false },
    { name: 'Ecrire un post de blog sur StencilJs', check: false },
  ];

  addTodo(target: HTMLInputElement) {
    this.todos = [...this.todos, { name: target.value, check: false }];
    target.value = '';
  }

  checkTodo(todo: Todo) {
    todo.check = !todo.check;
    this.todos = [...this.todos];
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            this.todos.map(todo =>
              <li class={todo.check ? 'complete' : ''} onClick={() => this.checkTodo(todo)}>
                <span>{todo.name}</span>
              </li>
            )
          }
        </ul>
        <input type="text" onChange={e => this.addTodo(e.target as HTMLInputElement)} />
      </div>
    );
  }
}
