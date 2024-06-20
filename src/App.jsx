import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './components/Menu'

function App() {

  return (
    <>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </>
  )
}

export default App
