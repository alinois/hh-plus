import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cities } from "./Cities";
import { MantineProvider } from '@mantine/core';

test("find area from select city", async () => {
  render(
    <MantineProvider>
      <Cities />
    </MantineProvider>
  );

  const input = screen.getByPlaceholderText(/Все города/i);
  expect(input).toBeInTheDocument();

  const user = userEvent.setup();
  await user.click(input);

  const moscowOption = await screen.findByText('Москва');
  const piterOption = await screen.findByText('Санкт-Петербург');

  expect(moscowOption).toBeInTheDocument();
  expect(piterOption).toBeInTheDocument();

  await user.click(moscowOption);
  expect(input).toHaveValue('Москва');
});
