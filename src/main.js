import { createRoot } from 'solid-js'
import { r } from 'solid-js/dom';

const ROOT = document.getElementById('app');

const workingNode = <h1>Working node!</h1>;
const WeirdWorkingNode = ({ name, r }) => <h1>Not sure why this {name} is working</h1>;
const NotWorkingNode = ({ name }) => <h1>Not working {name}</h1>;

createRoot(() => {
    ROOT.appendChild(workingNode);
    ROOT.appendChild(<WeirdWorkingNode name="node" r={r} />)
    ROOT.appendChild(<NotWorkingNode name="node" />);
});