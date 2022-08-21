import { useRef,  } from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/data.hook';
import { useSWRConfig } from 'swr';
import config from "../config";

import '../scss/topbar.scss';

export default function TopBar() {
  const inputRef: any = useRef();

  const { mutate } = useSWRConfig();

  const { categories, isLoading, error, isValidating } = useCategories();

  const randomBooksUrls = `${config.apiUrl}/books/random-books?count=12`;

  return (
    <div className="row topbar bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{width: '100%'}}>
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/">SWR APP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            {(isLoading || isValidating) && <img src="/img/loading.gif" /> }
            <ul className="navbar-nav me-auto">
              {Array.isArray(categories) && categories.map(cat => 
                <li className="nav-item active" key={cat.categoryId}>
                  <Link className="nav-link" to={`/category/${cat.categoryId}`}>
                    { cat.name }
                  </Link>
                </li>
              )}
            </ul>
            
          </div>
        </div>
      </nav>
      <div className="col-sm-6 offset-sm-3 mb-2">
        <form className="d-flex">
          <input className="form-control me-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div className="col-sm-3 text-right">
        <Link to={'/settings'}>
          <i className="fa fa-wrench"></i> Settings
        </Link>
        <button className='btn btn-primary' onClick={() => mutate(randomBooksUrls)}>
         <i className="fa fa-refresh"></i> Mutate
        </button>
      </div>
    </div>    


  )
}
