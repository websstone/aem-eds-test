// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';
import {
  Component, Fragment, h, render,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
//
const html = htm.bind(h);

class Fox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    if (this.state.loading) {
      return htm`<div>Loading...</div>`;
    }
    return htm`<h1>FOX Component ${this.props.name}</h1>`;
  }
}

/**
 * loads and decorates the header
 * @param {Element} block The footer block element
 */
export default async function decorate($block) {
  let row = $block.firstElementChild;
  const bg = row.querySelector('picture');
  $block.append(bg);
  row.remove();
  const bgP = $block.closest('p');
  if (bgP) bgP.remove();

  row = $block.firstElementChild;
  row.classList.add('hero-body');
  row.children[0].classList.add('hero-content');
  row.children[0].firstElementChild.style.color = 'yellow';

  const name = 'Billy';
  const app = html`<${Fox} name=${name} />`;
  render(app, $block);
}
