import Comment from "../components/Comment/Comment";
import { render, screen } from '@testing-library/react'


test('Comment text is correct', async () => {
  render(<Comment name={"hi"} body={"this is body"} />);
  expect(screen.getByText('this is body')).toBeInTheDocument();
});

