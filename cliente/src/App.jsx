import { Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'
import Detail from './views/detail/Detail'
import Form from './views/form/Form'
import Nav from './components/nav/Nav'


function App() {
  
  const {pathname} = useLocation()
  return (
    <>

     {pathname !== '/' && <Nav />}
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Landing/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route exact path='/create' element={<Form/>} />
     
    
    </Routes>
   
    </>
  )
}

export default App
