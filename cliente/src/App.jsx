import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'
import Detail from './views/detail/Detail'
import Form from './views/form/Form'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Landing/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/create' element={<Form/>} />
     
    
    </Routes>
   
    </>
  )
}

export default App
