import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { getAllLamps } from '../features/lamps/lampsAsyncThunk';
import { useAppDispatch } from '../hooks';
import './Layout.scss';

function Layout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllLamps());
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
