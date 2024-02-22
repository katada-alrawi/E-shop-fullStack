import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
        <Navbar bg="dark" variant="dark">
        <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Katazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>

          <Link to="/">
            <div className="logo-container">
              <img className="logo" src="/images/K-1-Copy.png" alt="Katazon" />
            
            </div>
          </Link>
          
        </header>
        <main>
        <Container className="mt-3">

        </Container>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light py-3">
          <div className="container text-center">
            <p className="mb-0">© 2024 Katazon. All rights reserved.</p>
            <p className="mb-0">Designed with ❤️ by Katada Alrawi</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
