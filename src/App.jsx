import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './components/Menu'
import Works from './pages/Works'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </>
  )
}

export default App
