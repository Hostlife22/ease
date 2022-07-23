import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { setSize } from '../features/horizontal/horizontalSlice';
import { getAllLamps } from '../features/lamps/lampsAsyncThunk';
import { useAppDispatch } from '../hooks';
import useWindowSize from '../hooks/useWindowSize';
import './Layout.scss';

function Layout() {
  const dispatch = useAppDispatch();
  const size = useWindowSize();

  useEffect(() => {
    dispatch(getAllLamps());
  }, []);

  useEffect(() => {
    dispatch(setSize(size));
  }, [size]);

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
