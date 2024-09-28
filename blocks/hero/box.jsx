import { render } from 'preact-render-to-string';
import { h, Component } from 'preact';
/** @jsx h */

// Classical components work
class Fox extends Component {
    render({ name }) {
        return <span class="fox">{name}</span>;
    }
}

// ... and so do pure functional components:
const Box = ({ type, children }) => (
    <div class={`box box-${type}`}>{children}</div>
);

export const html = render(
    <Box type="open">
        <Fox name="Finn" />
    </Box>
);