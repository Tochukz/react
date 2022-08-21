import Base from "../layout/Base";
import config from '../config';
import { IBook } from "../interfaces/IBook";

type Props = {
  book: IBook
}
export default function BookDetails({ book }: Props) {
    
  return (
    <Base>
      <div className="row">
        <div className="col-sm-3">
          <div className="">
            <img src={`${config.bookImgUrl}/${book?.img}`} />
          </div>
        </div>
        <div className="col-sm-9">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Title</strong>
                </td>
                <td>{ book.title}</td>
              </tr>
              <tr>
                <td>
                  <strong>Author</strong>
                </td>
                <td>{ book.author}</td>
              </tr>
              <tr>
                <td>
                  <strong>Edition</strong>
                </td>
                <td>{ book.edition }</td>
              </tr>
              <tr>
                <td>
                  <strong>Details</strong>
                </td>
                <td>{ book.details }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Base>
  );
}