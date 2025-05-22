import React from "react";
import { render, screen } from "@testing-library/react";
import { Media } from "../Midia";

describe("Componente Media", () => {
  it("deve renderizar a imagem com src, alt, width e height corretos", () => {
    render(
      <Media
        src="/imagem.jpg"
        alt="Descrição da imagem"
        width={500}
        height={400}
        className="custom-class"
      />
    );

    const img = screen.getByAltText("Descrição da imagem");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/imagem.jpg");
    expect(img).toHaveAttribute("width", "500");
    expect(img).toHaveAttribute("height", "400");

    const container = img.parentElement;
    expect(container).toHaveClass("overflow-hidden rounded-lg custom-class");
  });

  it("deve usar valores padrão para width e height quando não passados", () => {
    render(<Media src="/img.png" alt="Imagem padrão" />);

    const img = screen.getByAltText("Imagem padrão");

    expect(img).toHaveAttribute("width", "400");
    expect(img).toHaveAttribute("height", "300");
  });

  it("deve aplicar a classe className passada ao container", () => {
    render(
      <Media
        src="/imagem2.jpg"
        alt="Imagem teste"
        className="minha-classe"
      />
    );

    const container = screen.getByAltText("Imagem teste").parentElement;
    expect(container).toHaveClass("minha-classe");
  });

  it("deve ter a classe padrão de container mesmo sem passar className", () => {
    render(<Media src="/imagem3.jpg" alt="Sem classe extra" />);
    const container = screen.getByAltText("Sem classe extra").parentElement;

    expect(container).toHaveClass("overflow-hidden");
    expect(container).toHaveClass("rounded-lg");
  });

  it("deve ter a classe object-cover e tamanho w-full e h-full na img", () => {
    render(<Media src="/imagem4.jpg" alt="Testando classes da img" />);
    const img = screen.getByAltText("Testando classes da img");

    expect(img).toHaveClass("object-cover");
    expect(img).toHaveClass("w-full");
    expect(img).toHaveClass("h-full");
  });
});
