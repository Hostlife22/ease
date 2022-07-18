import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Route, Routes } from 'react-router-dom';
import './breakpoints.scss';
import Layout from './layout/Layout';

import { About, Article, Blog, Collection, Contacts } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Collection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Collection />} />
      </Route>
    </Routes>
  );
}

export default App;
