import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../scss/topbar.scss';

export default function TopBar() {
  const inputRef: any = useRef();

  return (
    <div className="row topbar">
      <div className="col-sm-6">
        <h1>
          <Link to="/">SWR APP</Link>
        </h1>
      </div>      
      <div className="col-sm-3 offset-sm-3"></div>
    </div>    
  )
}
