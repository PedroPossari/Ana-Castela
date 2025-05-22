import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Input,
  Textarea,
  Checkbox,
  Radio,
  Label,
  ErrorMessage,
} from "../FormControls";

describe("Componentes de Formulário", () => {
  it("deve renderizar o Input com borda vermelha quando houver erro", () => {
    render(<Input placeholder="Digite aqui" error="Campo obrigatório" />);
    const input = screen.getByPlaceholderText("Digite aqui");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("border-red-500");
  });

  it("deve renderizar o Textarea com borda cinza quando não houver erro", () => {
    render(<Textarea placeholder="Escreva algo" />);
    const textarea = screen.getByPlaceholderText("Escreva algo");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass("border-gray-300");
  });

  it("deve renderizar o Checkbox com label correto", () => {
    render(<Checkbox label="Aceito os termos" />);
    const checkbox = screen.getByLabelText("Aceito os termos");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });

  it("deve renderizar o Radio com label correto", () => {
    render(<Radio label="Masculino" />);
    const radio = screen.getByLabelText("Masculino");
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute("type", "radio");
  });

  it("deve mostrar asterisco vermelho no Label quando obrigatório", () => {
    render(<Label required>Nome</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
    const label = screen.getByText("Nome");
    expect(label).toBeInTheDocument();
  });

  it("deve mostrar a mensagem de erro no componente ErrorMessage", () => {
    render(<ErrorMessage message="Campo inválido" />);
    expect(screen.getByText("Campo inválido")).toBeInTheDocument();
  });

  it("não deve renderizar nada quando ErrorMessage não recebe mensagem", () => {
    const { container } = render(<ErrorMessage />);
    expect(container).toBeEmptyDOMElement();
  });
});
