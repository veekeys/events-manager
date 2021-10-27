import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows headline', () => {
  render(<App />);
  expect(screen.getByText("BENTLEY BAND")).toBeTruthy();
});
