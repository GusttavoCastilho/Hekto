import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ProductCard from ".";

const props = {
  id: 1,
  title: "my title",
  price: 45,
  description: "my description",
  category: "my category",
  image: "http://myimage.com.br",
  rating: {
    rate: 3.5,
    count: 120,
  },
};

describe("<ProductCard />", () => {
  const initialState = { items: [] };
  const mockStore = configureStore();
  let store;

  it("should render a correctly Product Card", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ProductCard product={props} />
      </Provider>
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", props.image);
    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(screen.getByText("$45")).toBeInTheDocument();
  });
});
