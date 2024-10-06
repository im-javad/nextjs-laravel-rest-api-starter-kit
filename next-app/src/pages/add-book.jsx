import BookForm from "../components/BookForm";
import { createBook } from "../services/bookService";
import { useRouter } from "next/router";

const AddBook = () => {
  const router = useRouter();

  const handleSubmit = async (book) => {
    await createBook(book);
    router.push("/");
  };

  return <BookForm onSubmit={handleSubmit} />;
};

export default AddBook;
