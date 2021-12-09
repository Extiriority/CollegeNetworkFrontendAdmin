/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import Header from '../components/Nav.svelte';
import { render } from '@testing-library/svelte';

describe("Test if Jest is working", () => {
    test('Welcome', () => {
        const { getByText } = render(Header);
        expect(getByText('Fontys Network')).toBeInTheDocument()
    });
});