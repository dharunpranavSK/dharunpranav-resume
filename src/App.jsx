import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Skills } from './components/Skills/Skills'
import Education from './components/Education/Education'
import Certifications from './components/Certification/Certifications'
import './App.css'

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <div className='content'>
          <Skills />
          <Certifications />
          <Education />
        </div>
      </div>
    </>
  );
}

export default App;


