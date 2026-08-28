// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DriftLens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DriftLens/i);
    expect(titleElement).toBeInTheDocument();
});
