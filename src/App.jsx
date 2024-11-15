import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Footer from './component/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/auth' element={<Auth />} />
    <Route path='/Register' element={<Auth insideRegister={true}/>}></Route>
    <Route path='/dashboard' element={<Dashboard />} />
  
  
      </Routes>
      <Footer></Footer>
    
    </>
  )
}


export default App
