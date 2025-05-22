import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="py-3 mt-auto">
    <Container className="text-center">
      <small>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</small>
    </Container>
  </footer>
);
  
  export default Footer;