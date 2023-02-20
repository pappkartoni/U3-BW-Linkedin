import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css"
import Navi from './components/Navi';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <main>
        <Footer />

      </main>
    </BrowserRouter>
  );
}

export default App;
