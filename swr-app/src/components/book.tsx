import { IBook } from "../interfaces/IBook";
import config from '../config';

type Props = {
  book: IBook
}
export default function Book(props: Props) {
  return (
    props.book &&
    <div className='col-sm-2' key={props.book.bookId}>
      <div style={{width: '100%'}}> 
      <img src={`${config.bookImgUrl}/${props.book.img || 'default.png'}`} style={{width: '100%'}}/>
      </div>
      <p style={{textAlign: 'center'}}>{ props.book.title }</p>
   </div>  
  )
}