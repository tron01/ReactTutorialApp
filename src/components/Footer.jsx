import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Footer.css'; // Optional custom styles

const Footer = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <footer className={`footer bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} py-3 mt-auto`}>
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} <strong>MyApp</strong>. All rights reserved.</small>
      </Container>
    </footer>
  );
};
  
  export default Footer;