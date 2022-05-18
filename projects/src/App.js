import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Tools from './components/tools/Tools';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Tools />
    </div>
  );
}

export default App;
