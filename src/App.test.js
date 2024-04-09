import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

test('renders Weather App title and form', () => {
  useState.mockReturnValueOnce([[], jest.fn()]);

  render(<App />);

  const titleElement = screen.getByText(/Weather App/i);
  expect(titleElement).toBeInTheDocument();

  const formElement = screen.getByRole('textbox', { name: /city/i }); 
  expect(formElement).toBeInTheDocument();
});
test('adds a city to the list', () => {
  const setCities = jest.fn();
  useState.mockReturnValueOnce([[], setCities]);

  render(<App />);

  const formInput = screen.getByRole('textbox', { name: /city/i });
  userEvent.type(formInput, 'New York');

  const submitButton = screen.getByRole('button', { name: /add/i }); 
  userEvent.click(submitButton);

  expect(setCities).toHaveBeenCalledWith(['New York']);
});
