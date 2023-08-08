import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import JobDesc from './MVP/JobDesc/JobDesc'
import Resume from './MVP/Resume/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description_ranker' element={<JobDesc/>}/>
        <Route path='/resume_ranker' element={<Resume />}/>
      </Routes>
    </div>

    
  )
}

export default App
