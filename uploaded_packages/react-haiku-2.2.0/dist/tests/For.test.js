import { jsx as _jsx } from "react/jsx-runtime";
import { For } from '../utils/For';
import { render, screen } from '@testing-library/react';
describe('For', () => {
    const testArray = ['foo', 'bar', 'baz'];
    it('renders the For component', () => {
        const { asFragment } = render(_jsx(For, { each: testArray, render: (item, index) => _jsx("span", { children: `${index}: ${item}` }, index) }));
        expect(asFragment()).toMatchSnapshot();
        testArray.forEach((item, index) => {
            expect(screen.getByText(`${index}: ${item}`)).toBeInTheDocument();
        });
        expect(document.body.firstChild.childNodes).toHaveLength(testArray.length);
    });
});
