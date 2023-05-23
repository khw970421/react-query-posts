// import App from "./App.tsx";
import { render, screen } from '@testing-library/react'

test('Renders main page correctly', () => {
  render(<div>Hello, Jest!</div>);
  expect(screen.getByText('Hello, Jest!')).toBeInTheDocument();
});