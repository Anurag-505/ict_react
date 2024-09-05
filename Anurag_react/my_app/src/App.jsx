import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Zxy from './components/Zxy'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/s' element={<Statebasics />} />
        <Route path='/c' element={<Counter />}> </Route>
        <Route path='/zxy' element={<Zxy />}></Route>
        <Route path='/api' element={<Api />}></Route>
        <Route path='/poke' element={<Pokemon />}></Route>
      </Routes>
      <br /><br /> 
      
    </>
  )
}

export default App
