import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Portfoliohome from './Component/Portfoliohome';
import Projectsection from './Component/Projectsection';
import Skillsection from './Component/Skillsection';
import Contact from './Component/Contact';


function App() {
  return(

    <>
      <Navbar/>
      <Portfoliohome/>
      <About/>

      <Skillsection/>
      <Projectsection/>
      <Contact/>


  </>
  ) ;
}

export default App;
