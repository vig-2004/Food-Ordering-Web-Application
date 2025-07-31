import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../src/utils/appStore";
import "@testing-library/jest-dom";

it("page should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query the login button
  const loginButton = screen.getByRole("button", { name: /login/i }); // Case-insensitive match
  expect(loginButton).toBeInTheDocument();
});

it("page should render header component with cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query the cart items
  const cartItems = screen.getByText(/cart/i); // Case-insensitive match
  expect(cartItems).toBeInTheDocument();
});

it("page should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query and click the login button
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginButton);

  // Query the logout button
  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeInTheDocument();
});
