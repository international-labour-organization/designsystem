import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { UnsupportedError } from '../../task-runner/custom-errors';
const render = {
    type: 'timed',
    name: 'Initial render',
    description: `This task records how long ReactDOM.render() takes with your component`,
    run: async ({ getElement, container }) => {
        ReactDOM.render(getElement(), container);
    },
};
const hydrate = {
    type: 'timed',
    name: 'Hydrate',
    description: `
      This task records how long a ReactDOMServer.hydrate() call
      takes. If you are server side rendering a React component then html is
      sent down to the browser. Hydration is the process of React reading through
      the HTML and building up it's internal virtual model. After hydration React
      is able to take over the HTML as if it had done the original render on the client.
  `,
    run: async ({ getElement, controls, container }) => {
        const html = ReactDOMServer.renderToString(getElement());
        container.innerHTML = html;
        await controls.time(async function mount() {
            ReactDOM.hydrate(getElement(), container);
        });
    },
};
const reRender = {
    type: 'timed',
    name: 'Re render',
    description: `
      This task records how long it takes to re-render the component with no prop changes.
      Note: You can improve this score quickly by using React.memo near the top of your
      component tree.
  `,
    run: async ({ getElement, controls, container }) => {
        ReactDOM.render(getElement(), container);
        await controls.time(async function mount() {
            ReactDOM.render(getElement(), container);
        });
    },
};
function getAllChildren(container) {
    return Array.from(container.querySelectorAll('*'));
}
const domElementCount = {
    type: 'static',
    name: 'DOM element count',
    description: `
    The more DOM element your component creates, the more work the browser needs to do
  `,
    run: async ({ getElement, container }) => {
        ReactDOM.render(getElement(), container);
        const allChildren = getAllChildren(container);
        return String(allChildren.length);
    },
};
const domElementCountWithoutSvg = {
    type: 'static',
    name: 'DOM element count (no nested inline svg elements)',
    description: `
    The count of DOM elements excluding inner SVG elements
  `,
    run: async ({ getElement, container }) => {
        ReactDOM.render(getElement(), container);
        const allChildren = getAllChildren(container).filter((el) => {
            const parent = el.closest('svg');
            if (!parent) {
                return true;
            }
            if (parent === el) {
                return true;
            }
            return false;
        });
        return String(allChildren.length);
    },
};
const completeRender = {
    type: 'timed',
    name: 'Complete render (mount + layout + paint)',
    description: `
    Time taken for the CPU to become idle after starting ReactDOM.render.
    This will include React's time to create the element and mount it into the DOM,
    as well as subsequent browser layout and painting
  `,
    run: async ({ getElement, container }) => {
        const idle = window.requestIdleCallback;
        if (typeof idle !== 'function') {
            throw new UnsupportedError('requestIdleCallback is not supported in this browser');
        }
        ReactDOM.render(getElement(), container);
        await new Promise((resolve) => {
            idle(() => resolve());
        });
    },
};
export function traverse(rootNode, callback) {
    function walk(node) {
        callback(node);
        if (!node.child && !node.sibling) {
            return;
        }
        node.child && walk(node.child);
        node.sibling && walk(node.sibling);
    }
    walk(rootNode);
}
const reactFiberNodeCount = {
    type: 'static',
    name: 'React Fiber node count',
    description: `
    The number of React Elements or internal objects ("fibers") that hold information about the component tree state.
  `,
    run: async ({ getElement, container }) => {
        var _a, _b;
        ReactDOM.render(getElement(), container);
        const fiberRoot = (_b = (_a = container === null || container === void 0 ? void 0 : container._reactRootContainer) === null || _a === void 0 ? void 0 : _a._internalRoot) === null || _b === void 0 ? void 0 : _b.current;
        let count = 0;
        fiberRoot && traverse(fiberRoot, () => count++);
        return String(count);
    },
};
const group = {
    groupId: 'Client',
    name: 'Client 👩‍💻',
    tasks: [
        render,
        reRender,
        hydrate,
        domElementCount,
        domElementCountWithoutSvg,
        completeRender,
        reactFiberNodeCount,
    ],
};
export default group;
