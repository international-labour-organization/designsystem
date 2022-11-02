import { Button, Form, Icons } from '@storybook/components';
import { styled } from '@storybook/theming';
import React from 'react';
import useRequiredContext from '../use-required-context';
import ServiceContext from './service-context';
import { useService } from '@xstate/react';
import { pluraliseCopies, pluraliseSamples } from '../util/pluralise';
import nextEventsInclude from './next-events-include';
import * as selectors from '../selectors';
import { readFile } from './file-system';
const TABLET_BREAKPOINT = 768;
const Container = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Message = styled.small `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 1;
  flex-grow: 1;
`;
const Segment = styled.div `
  display: flex;
  align-items: center;

  > * {
    margin: var(--halfGrid) !important;
    flex-shrink: 0;
  }
`;
const HiddenAnchor = styled.a `
  display: none;
`;
const FileButtons = styled.div `
  flex: 1;
  display: flex;
  justify-content: flex-end;

  > * {
    margin: var(--halfGrid) !important;
    flex-shrink: 0;
  }
`;
const MetaSettings = styled.div `
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;
const ResponsiveIcon = styled(Icons) `
  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-right: 0px !important;
  }
`;
const ResponsiveText = styled.span `
  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: none;
  }
`;
const CollapseSegment = styled.div `
  margin: var(--halfGrid);
  align-items: center;
  display: grid;
  grid-template-columns: min-content minmax(100px, auto);
  gap: var(--halfGrid);
`;
export default function Topbar() {
    const service = useRequiredContext(ServiceContext);
    const [state, send] = useService(service);
    const current = state.context.current;
    const pinned = state.context.pinned;
    const sizes = state.context.sizes;
    const enabled = {
        start: nextEventsInclude('START_ALL', state.nextEvents),
        change: nextEventsInclude('SET_VALUES', state.nextEvents) && pinned == null,
        pin: nextEventsInclude('PIN', state.nextEvents) && current.results != null,
        unpin: nextEventsInclude('UNPIN', state.nextEvents) && current.results != null,
    };
    const icons = {
        pin: pinned ? 'lock' : 'unlock',
        save: 'download',
        load: 'upload',
    };
    return (React.createElement(Container, null,
        React.createElement(Segment, null,
            React.createElement(Button, { css: {
                    textTransform: 'uppercase',
                }, primary: true, small: true, onClick: () => send({ type: 'START_ALL' }), disabled: !enabled.start, id: selectors.startAllButtonId }, "Start all"),
            React.createElement(Form.Select, { id: selectors.copySelectId, disabled: !enabled.change, value: current.copies, onChange: (event) => {
                    const values = {
                        samples: current.samples,
                        copies: Number(event.target.value),
                    };
                    send('SET_VALUES', values);
                } }, sizes.map((size) => (React.createElement("option", { key: size, value: size },
                size,
                " ",
                pluraliseCopies(size))))),
            React.createElement(Form.Select, { id: selectors.sampleSelectId, disabled: !enabled.change, value: current.samples, onChange: (event) => {
                    const values = {
                        copies: current.copies,
                        samples: Number(event.target.value),
                    };
                    send('SET_VALUES', values);
                } }, sizes.map((size) => (React.createElement("option", { key: size, value: size },
                size,
                " ",
                pluraliseSamples(size)))))),
        React.createElement(MetaSettings, null,
            React.createElement(CollapseSegment, null,
                React.createElement(Button, { id: selectors.pinButtonId, secondary: true, outline: !pinned, small: true, disabled: pinned ? !enabled.unpin : !enabled.pin, onClick: () => send({ type: pinned ? 'UNPIN' : 'PIN' }) },
                    React.createElement(ResponsiveIcon, { icon: icons.pin, "aria-label": icons.pin }),
                    React.createElement(ResponsiveText, null, pinned ? 'Unpin baseline' : 'Pin as baseline')),
                React.createElement(Message, null, state.context.message)),
            React.createElement(FileButtons, null,
                React.createElement(Button, { id: selectors.saveButtonId, secondary: true, small: true, outline: true, disabled: current.results == null, onClick: () => send({ type: 'SAVE' }) },
                    React.createElement(ResponsiveIcon, { icon: icons.save, "aria-label": icons.save }),
                    React.createElement(ResponsiveText, null, "Save result")),
                React.createElement(Button, { secondary: true, small: true, outline: true, onClick: () => {
                        var _a;
                        (_a = document.getElementById(selectors.loadButtonId)) === null || _a === void 0 ? void 0 : _a.click();
                    } },
                    React.createElement(ResponsiveIcon, { icon: icons.load, "aria-label": icons.load }),
                    React.createElement(ResponsiveText, null, "Load result")),
                React.createElement(Form.Input, { style: { display: 'none' }, id: selectors.loadButtonId, type: "file", accept: ".json", onChange: (e) => {
                        readFile(e, (results, storyName) => send('LOAD_FROM_FILE', { pinned: results, storyName }));
                    } })),
            React.createElement(HiddenAnchor, { id: selectors.hiddenFileAnchorId }))));
}
