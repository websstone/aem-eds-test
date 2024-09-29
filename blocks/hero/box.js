import { Component } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

export default class Fox extends Component {
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
