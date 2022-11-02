import React from 'react';
function Host({ children }) {
    return React.createElement(React.Fragment, null, children());
}
export default function toSafeElement({ getNode, copies }) {
    const nodes = Array.from({ length: copies }, (_, key) => (React.createElement(Host, { key: key }, getNode)));
    return React.createElement(React.Fragment, null, nodes);
}
