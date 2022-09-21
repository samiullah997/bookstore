const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zIMJgYWqGatFJmUYBf1I/books/';

const api = {
  addNewBook: async ({
    id, title, author, category,
  }) => {
    await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
    });
  },
  deleteBook: async (bookId) => {
    await fetch(baseURL + bookId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  fetchBooks: async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    const books = Object.entries(data)
      .map(([id, book]) => {
        const { title, author } = book[0];
        return { id, title, author };
      })
      .sort((a, b) => a.title.localeCompare(b.title));

    return books;
  },
};

export default api;
