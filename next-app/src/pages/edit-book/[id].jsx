import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookForm from "../../components/BookForm";
import { getBook, updateBook } from "../../services/bookService";

const EditBook = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await getBook(id);
      setBook(data.data);
    };
    if (id) fetchBook();
  }, [id]);

  const handleSubmit = async (updatedBook) => {
    await updateBook(id, updatedBook);
    router.push("/");
  };

  return book ? (
    <BookForm initialData={book} onSubmit={handleSubmit} />
  ) : (
    <p>Loading...</p>
  );
};

export default EditBook;
