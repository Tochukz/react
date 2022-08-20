import { useParams } from 'react-router-dom';
import Base from '../layout/Base';

export default function Details() {
  const params: any = useParams();
  const bookId = params.bookId;

  return (
    <Base>
      <p>Details Page</p>
    </Base>
  )
}
