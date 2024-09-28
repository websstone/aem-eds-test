// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';
import { render } from 'preact-render-to-string';
import { Component, h } from 'preact';
//
// function App(props) {
//   return `<h1>Hello ${props.name}!</h1>`;
// }
// import { html } from 'htm';

const Header = ({ name }) => h`<h1>${name} List</h1>`;
const Footer = (props) => h`<footer ...${props} />`;

class App extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }

  render({ page }, { todos = [] }) {
    return h`
          <div class="app">
            <${Header} name="ToDo's (${page})" />
            <ul>
              ${todos.map((todo) => h`
                <li key=${todo}>${todo}</li>
              `)}
            </ul>
            <button onClick=${() => this.addTodo()}>Add Todo</button>
            <${Footer}>footer content here<//>
          </div>
        `;
  }
}

/**
 * loads and decorates the header
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  let row = block.firstElementChild;
  const bg = row.querySelector('picture');
  block.append(bg);
  row.remove();
  const bgP = block.closest('p');
  if (bgP) bgP.remove();

  row = block.firstElementChild;
  row.classList.add('hero-body');
  row.children[0].classList.add('hero-content');
  row.children[0].firstElementChild.style.color = 'yellow';

  // const html = render(
  //   <App name="World" />
  // );
  let err = 'empty';
  try {
    err = render(h`
      <${App} page="Home"/>`);
  } catch (error) {
    err = error;
  }
  const hamburger = document.createElement('div');
  hamburger.innerHTML = err;
  block.append(hamburger);
}
