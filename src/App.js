import Navbar from './Components/Navbars/Navbar';
import Introduction from './Components/Introductions/Introduction';
import Project from './Components/Projects/Project';
import Skill from './Components/Skills/Skill';
import Experience from './Components/Experiences/Experience';
import Contact from './Components/Contacts/Contact';
//import Footer from './Components/Footers/Footer';
import Menu from './Components/Menus/Menu';
import './app.scss';
import { useState } from 'react';
function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Introduction/>
        <Project/>
        <Skill/>
        <Experience/>
        <Contact />
        
      </div>
      
    </div>
  );
}

export default App;
