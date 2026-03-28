import React from 'react'
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/home"
import About from "./Components/About/about"
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
