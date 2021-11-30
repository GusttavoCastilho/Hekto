import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from ".";

const props = {
  title: "My title",
  short_description: "My short description",
  description: "My description",
  buttonText: "My Label button",
};

describe("<Banner />", () => {
  it("should render correctly", () => {
    render(<Banner {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: props.short_description })
    ).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: props.buttonText})).toBeInTheDocument()
  });
});
