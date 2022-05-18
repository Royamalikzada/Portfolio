import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
