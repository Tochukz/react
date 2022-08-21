import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Settings from './pages/Settings';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:bookId" element={<Details />} />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}