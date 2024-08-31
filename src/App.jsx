import React from 'react'
import Display from './components/Content/Display'
import Documents from './components/Content/Documents'
import Persons from './components/Content/Persons'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Persons />
      <Display />
      <Documents />
    </div>
  )
}

export default App