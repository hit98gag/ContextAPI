import React, { createContext, useState } from 'react'
import Comp from './contextapi/Comp'
import Toggle from './contextapi/Toggle'

export const Theme = createContext(null);  // context api


const App = () => {
  
  const [first, setfirst] = useState(true) // use state 
  
  function Hello () {
    setfirst(!first)
  }
  return (
    <>
    <div className="App">
    <h1> I have Changed theme to {first ? "dark":"light"}</h1>

    <Theme.Provider value={first} >
    <Comp Hello={Hello}/>
    <Toggle Hello={Hello}/>

    </Theme.Provider>


    </div>
    </>
  )
}

export default App