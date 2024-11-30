import React from 'react'
import ContextProvider from './ContextProvider'
import Login from './Login'
import Profile from './Profile'

function LearningContextAPI() {
  return (
    <ContextProvider>
        <h1>Using React.ContextAPI...</h1>
        <Login/>
        <Profile/>
    </ContextProvider>
  )
}

export default LearningContextAPI