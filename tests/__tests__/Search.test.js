import { act, render, screen, waitFor } from "@testing-library/react";
import Body from "../../src/components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// Mock the fetch API
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

// it("renders body component with search box", async () => {
//   render(
//     <BrowserRouter>
//       <Body />
//     </BrowserRouter>
//   );

//   // Wait for the state updates to complete
//   await waitFor(() => {
//     const searchBtn = screen.getByRole("button", { name: /search/i });
//     expect(searchBtn).toBeInTheDocument();
//   });
// });

it("renders body component with search box", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Query the search button
  const searchBtn = screen.getByRole("button", { name: /search/i });
  expect(searchBtn).toBeInTheDocument();
});
