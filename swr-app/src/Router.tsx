import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:bookId" element={<Details />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}