import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const headerMeta = getMetadata('header');
  const headerPath = navMeta ? new URL(headerMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(headerPath);

  block.textContent = '';
  const nav = document.createElement('div');
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);
  nav.append("<span>Hero</span>");

  block.append(nav);
}
