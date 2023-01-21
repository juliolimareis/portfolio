
// Teste de unidade
import React from "react";
import { render, fireEvent, expect, } from "@testing-library/react";
import About from "./About";
import { MemoryRouter, } from "react-router-dom";

describe("About page", () => {
  it("should render the page correctly", () => {
    const { getByText } = render(<MemoryRouter><About /></MemoryRouter>);

    expect(getByText("Sobre")).toBeInTheDocument();
    expect(getByText("O que eu faço?")).toBeInTheDocument();
    expect(getByText("Desenvolvimento de sistemas")).toBeInTheDocument();
    expect(getByText("Como tudo começou?")).toBeInTheDocument();
    expect(getByText("Quais são as minhas estratégias de desenvolvimento?")).toBeInTheDocument();
    expect(getByText("Você gosta de trabalhar com tecnologia?")).toBeInTheDocument();
    expect(getByText("Quais são suas experiências com tecnologia?")).toBeInTheDocument();
  });

  it("should navigate to the front-end page when clicking on the button", () => {
    const { getByTestId } = render(<MemoryRouter><About /></MemoryRouter>);

    const buttonFrontEnd = getByTestId("button-front-end");

    fireEvent.click(buttonFrontEnd);

    expect(window.location.pathname).toEqual("/front-end");
  });

  it("should navigate to the back-end page when clicking on the button", () => {
    const { getByTestId } = render(<MemoryRouter><About /></MemoryRouter>);

    const buttonBackEnd = getByTestId("button-back-end");

    fireEvent.click(buttonBackEnd);

    expect(window.location.pathname).toEqual("/back-end");
  });
});
