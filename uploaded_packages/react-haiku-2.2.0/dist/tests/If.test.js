import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { If } from '../utils/If';
describe('If', () => {
    const text = 'If Block';
    it('renders the If component', () => {
        const { asFragment } = render(_jsx(If, { isTrue: true, children: text }));
        expect(asFragment()).toMatchSnapshot();
        expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('should not render anything if isTrue is false', () => {
        render(_jsx(If, { isTrue: false, children: text }));
        expect(screen.queryByText(text)).toBeNull();
        expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
});
