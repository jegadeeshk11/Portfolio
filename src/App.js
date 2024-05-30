import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Resume from "./Components/Resume"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
