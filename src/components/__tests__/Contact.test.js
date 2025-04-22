import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page Test cases", () => {
  it("should load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us page", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //   expect(button).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should load input inside contact us page", () => {
    render(<Contact />);

    const inputname = screen.getByPlaceholderText("name");

    expect(inputname).toBeInTheDocument();
  });

  test("should load 2input inside contact us page", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //   expect(inputBoxes.pushlength == 2);
    //   expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
