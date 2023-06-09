import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <div className="container mx-auto  py-8 px-2 sm:px-4">
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
