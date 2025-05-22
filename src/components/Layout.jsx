import AppNavbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <AppNavbar />
    <main className="flex-grow-1 py-4">
      {children}
    </main>
    <Footer />
  </div>
);
export default Layout;