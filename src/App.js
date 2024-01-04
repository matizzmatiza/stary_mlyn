import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import MenuButton from './components/MenuButton';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className='main--wrapper'>
          <MenuButton />
          <Contact />
        </div>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;