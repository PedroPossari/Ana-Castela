import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AlbumList } from "../AlbumList";

const mockToggleFavorite = jest.fn();
const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

jest.mock("../../../../context/FavoritesContext", () => ({
  useFavorites: () => ({
    favorites: ["1"],
    toggleFavorite: mockToggleFavorite,
  }),
}));

describe("Componente AlbumList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.alert = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(() => Promise.resolve()),
      },
    });
  });

  it("deve renderizar todos os álbuns", () => {
    const albums = [
      { id: "1", name: "Álbum 1", images: [{ url: "url1.jpg" }] },
      { id: "2", name: "Álbum 2", images: [{ url: "url2.jpg" }] },
    ];
    render(<AlbumList albums={albums} />);
    expect(screen.getByAltText("Álbum 1")).toBeInTheDocument();
    expect(screen.getByAltText("Álbum 2")).toBeInTheDocument();
  });

  it("deve adicionar/remover álbum dos favoritos ao clicar no botão", () => {
    const albums = [{ id: "1", name: "Álbum 1", images: [{ url: "url1.jpg" }] }];
    render(<AlbumList albums={albums} />);
    const favButton = screen.getByLabelText("Remover dos favoritos");
    fireEvent.click(favButton);
    expect(mockToggleFavorite).toHaveBeenCalledWith("1");
  });

  it("deve copiar o link para a área de transferência ao clicar no botão de compartilhar", async () => {
    const albums = [{ id: "1", name: "Álbum 1", images: [{ url: "url1.jpg" }] }];
    render(<AlbumList albums={albums} />);
    const shareButton = screen.getByLabelText("Compartilhar");
    fireEvent.click(shareButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "https://open.spotify.com/intl-pt/album/1"
    );
    await Promise.resolve();
    expect(global.alert).toHaveBeenCalledWith("Link copiado para a área de transferência!");
  });

  it("deve mostrar alerta de erro se o clipboard falhar", async () => {
    const albums = [{ id: "1", name: "Álbum 1", images: [{ url: "url1.jpg" }] }];
    navigator.clipboard.writeText = jest.fn(() => Promise.reject(new Error("Falha")));
    render(<AlbumList albums={albums} />);
    const shareButton = screen.getByLabelText("Compartilhar");
    fireEvent.click(shareButton);
    await Promise.resolve();
    expect(global.alert).toHaveBeenCalledWith("Erro ao copiar o link.");
  });

  it("deve mostrar alerta de não suporte ao clipboard quando não disponível", () => {
    const albums = [{ id: "1", name: "Álbum 1", images: [{ url: "url1.jpg" }] }];
    Object.assign(navigator, { clipboard: undefined });
    render(<AlbumList albums={albums} />);
    const shareButton = screen.getByLabelText("Compartilhar");
    fireEvent.click(shareButton);
    expect(global.alert).toHaveBeenCalledWith("Compartilhamento não suportado neste navegador.");
  });
});