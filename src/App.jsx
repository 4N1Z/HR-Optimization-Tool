import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import JobDesc from './MVP/JobDesc/JobDesc'
import Resume from './MVP/Resume/Resume'
import JobDescOut from './MVP/JobDesc/JobDescOut'
import ResumeOut from './MVP/Resume/ResumeOut'
import Resume2 from './MVP/Resume/Resume2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description_ranker' element={<JobDesc/>}/>
        <Route path='/resume_ranker' element={<Resume />}/>
        <Route path='/resume_rankerForMVP' element={<Resume2/>}/>
        <Route path='/output_jobDescription' element={<JobDescOut/>}/>
        <Route path='/output_resume' element={<ResumeOut/>}/>
      </Routes>
    </div>

    
  )
}

export default App
