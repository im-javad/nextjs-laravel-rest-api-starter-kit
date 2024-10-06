import { useState, useEffect } from "react";

const BookForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [publishedYear, setPublishedYear] = useState(
    initialData?.published_year || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, published_year: publishedYear });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        value={publishedYear}
        onChange={(e) => setPublishedYear(e.target.value)}
        placeholder="Published Year"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
