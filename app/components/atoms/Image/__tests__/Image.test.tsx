import { render, screen } from "@testing-library/react";
import { Image } from "../Image";

describe("Image", () => {
  it("renderiza com o src correto", () => {
    render(<Image src="/img/teste.jpg" alt="Imagem de teste" />);
    const img = screen.getByAltText("Imagem de teste") as HTMLImageElement;
    expect(img.src).toContain("/img/teste.jpg");
  });

  it("renderiza com o alt correto", () => {
    render(<Image src="/img/teste.jpg" alt="Descrição alternativa" />);
    expect(screen.getByAltText("Descrição alternativa")).toBeInTheDocument();
  });

  it("aplica classes padrão e adicionais", () => {
    render(<Image src="/img/teste.jpg" alt="Img" className="rounded-md" />);
    const img = screen.getByAltText("Img");
    expect(img).toHaveClass("w-full");
    expect(img).toHaveClass("h-48");
    expect(img).toHaveClass("object-cover");
    expect(img).toHaveClass("rounded-md");
  });

  it("possui o atributo loading='lazy'", () => {
    render(<Image src="/img/teste.jpg" alt="Imagem" />);
    const img = screen.getByAltText("Imagem");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("não quebra sem a prop className", () => {
    render(<Image src="/img/teste.jpg" alt="Sem classe" />);
    const img = screen.getByAltText("Sem classe");
    expect(img).toBeInTheDocument();
  });
});
