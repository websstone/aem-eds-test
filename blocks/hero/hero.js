// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';
import { html } from './box.jsx';
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
  row.append(html);
}
