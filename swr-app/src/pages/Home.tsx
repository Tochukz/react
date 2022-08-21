import Base from '../layout/Base';


import { useRamdomBooks } from '../hooks/data.hook';
import Book from '../components/book';

export default function Home() {
  const {books, error, isLoading} = useRamdomBooks(12);

  return (
    <Base>
      <div className="row mt-4">
        {isLoading && <p>Loading...</p>} 
        {
          Array.isArray(books) && books.map(book => <Book key={book.bookId} book={book} />)
        }
      </div>
    </Base>
  )
}
