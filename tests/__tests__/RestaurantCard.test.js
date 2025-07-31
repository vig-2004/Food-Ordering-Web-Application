import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurntCard, {
  withDiscountOffer,
} from "../../src/components/RestaurntCard";

it("should render Restraunt card data with props data", () => {
  render(<RestaurntCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("should render Restrauntcard component with Discount Label", () => {
  // Wrap RestaurntCard with withDiscountOffer
  const DiscountedCard = withDiscountOffer(RestaurntCard);
  render(<DiscountedCard resData={MOCK_DATA} />);

  // Query the discount label
  const discountLabel = screen.getByText(/discount available/i); // Adjust text if necessary
  expect(discountLabel).toBeInTheDocument();

  // Optionally, check the full discount text
  const fullDiscountText = screen.getByText(/20% off on all orders/i);
  expect(fullDiscountText).toBeInTheDocument();
});
