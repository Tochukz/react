import Base from '../layout/Base';
import { useParams } from 'react-router-dom';
import { useBookCategory } from '../hooks/data.hook';
import Book from '../components/book';

export default function Category() {
  const param: any = useParams();
  const { books, isLoading} = useBookCategory(param.categoryId);
   
  return (
    <Base>
      <div className="row">
        { isLoading && 
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