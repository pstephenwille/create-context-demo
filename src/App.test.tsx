import React from 'react';
import {render} from '@testing-library/react';

import App from './App';

describe('App', () => {
    test('Shows title - "Tools Portal"', () => {
        const {getByText} = render(<App/>);
        const linkElement = getByText(/tools portal/i);
        expect(linkElement).toBeInTheDocument();
    });
});
