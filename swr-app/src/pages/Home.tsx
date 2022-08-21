import Base from '../layout/Base';


import { useRandomBooks } from '../hooks/data.hook';
import Book from '../components/book';

export default function Home() {
  const {books, error, isLoading, isValidating} = useRandomBooks(12);

  return (
    <Base>
      <div className="row mt-4">
        { (isLoading || isValidating) && 
          <div className="col-sm-12 text-center mt-4">
            <img src="/img/loading.gif" />
          </div> 
        } 
        {
          Array.isArray(books) && books.map(book => <Book key={book.bookId} book={book} />)
        }
      </div>
    </Base>
  )
}
