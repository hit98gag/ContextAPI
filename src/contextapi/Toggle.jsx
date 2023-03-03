import React, { useContext } from 'react'
import { Theme } from '../App'
import { useSelector } from 'react';

const Toggle = ({Hello}) => {
  const first = useContext(Theme)
 

  return (

    <div style={first?{color:"White" , backgroundColor:"Black"}:{color:"Black" , backgroundColor:"white"}}>
        <button onClick={Hello}> I have changed to {first ? "dark":"light"}</button>
        <p> 
        DeSantis's proposal to prevent immigrants from accessing ... - State of Reform February 27, 2023
Phillips discusses bipartisanship, critical policy issues during EP ... - Eden Prairie Local News February 27, 2023


        </p>
    </div>
  )
}

export default Toggle