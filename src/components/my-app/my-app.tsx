import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil todo example</h1>
        </header>

        <main>
           <my-todo></my-todo>
        </main>
      </div>
    );
  }
}
