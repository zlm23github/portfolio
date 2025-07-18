import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
//import Contact from './pages/Contact'
import Project1 from './pages/projects/Project1'
import Project2 from './pages/projects/Project2'
import Project3 from './pages/projects/Project3'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<Project2 />} />
        <Route path="/project/3" element={<Project3 />} />
      </Routes>
    </Router>
  )
}

export default App
