import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Tools from './components/tools/Tools';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Tools />
      <Contact />
    </div>
  );
}

export default App;
