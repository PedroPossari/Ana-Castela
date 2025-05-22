import React from "react";
import { render, screen } from "@testing-library/react";
import { AlbumsClient } from "../AlbumsClient";
import { FavoritesProvider } from "../../../../context/FavoritesContext"; 

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => (key === "albumsPage.title" ? "Álbuns" : key),
  }),
}));

const mockAlbums = [
  { id: "1", name: "Album 1", images: [{ url: "/img1.jpg" }] },
  { id: "2", name: "Album 2", images: [{ url: "/img2.jpg" }] },
];

function renderWithProviders(ui: React.ReactElement) {
  return render(<FavoritesProvider>{ui}</FavoritesProvider>);
}

describe("AlbumsClient", () => {
  it("deve renderizar o título traduzido", () => {
    renderWithProviders(<AlbumsClient albums={mockAlbums} />);
    expect(screen.getByText("Álbuns")).toBeInTheDocument();
  });

  it("deve renderizar o componente AlbumList", () => {
    renderWithProviders(<AlbumsClient albums={mockAlbums} />);
    expect(screen.getByText("Album 1")).toBeInTheDocument();
    expect(screen.getByText("Album 2")).toBeInTheDocument();
  });

  it("deve conter a classe min-h-screen na div principal", () => {
    const { container } = renderWithProviders(<AlbumsClient albums={mockAlbums} />);
    expect(container.firstChild).toHaveClass("min-h-screen");
  });

  it("deve conter a classe bg-gray-100 no main", () => {
    renderWithProviders(<AlbumsClient albums={mockAlbums} />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveClass("bg-gray-100");
  });

  it("deve renderizar o componente MainContent e seu conteúdo", () => {
    renderWithProviders(<AlbumsClient albums={mockAlbums} />);
    expect(screen.getByText("Álbuns")).toBeInTheDocument();
  });
});
