import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/bookService";
import Link from "next/link";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await getBooks();
      setBooks(data.data);
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Books</h1>
      <Link href="/add-book">Add Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.published_year})
            <Link href={`/edit-book/${book.id}`}>Edit</Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
