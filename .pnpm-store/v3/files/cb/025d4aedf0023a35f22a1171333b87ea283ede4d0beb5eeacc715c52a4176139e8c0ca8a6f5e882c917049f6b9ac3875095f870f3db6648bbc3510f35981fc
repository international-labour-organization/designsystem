import ReactDOM from 'react-dom';
import mark from './mark';
import withContainer from './with-container';
import withDuration from './with-duration';
export default async function runInteractionTask({ task, getElement }) {
    return withContainer(async (container) => {
        ReactDOM.render(getElement(), container);
        const duration = await mark(task.name, () => withDuration((controls) => task.run({ controls, container })));
        ReactDOM.unmountComponentAtNode(container);
        return duration;
    });
}
