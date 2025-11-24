abstract class FavoriteManager {
  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  private favorites: string[];

  constructor() {
    super();
    this.favorites = [];
  }

  addFavorite(item: string): void {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
      this.favorites.sort((a, b) => a.localeCompare(b));
    }
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}

class BooksFavoriteManager extends FavoriteManager {
  private favorites: string[];

  constructor() {
    super();
    this.favorites = [];
  }

  addFavorite(item: string): void {
    this.favorites.unshift(item);
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}

// Exemplo de uso
const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("O Senhor dos Anéis");
moviesManager.addFavorite("Harry Potter");
moviesManager.addFavorite("O Senhor dos Anéis"); // Não adiciona duplicado
console.log(moviesManager.getFavorites()); // ["Harry Potter", "O Senhor dos Anéis"]

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("O Alquimista");
booksManager.addFavorite("O Código da Vinci");
console.log(booksManager.getFavorites()); // ["O Código da Vinci", "O Alquimista"]