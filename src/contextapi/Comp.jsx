import React from 'react'
import {useContext} from 'react'
import { Theme } from '../App'

const Comp = ({Hello}) => {
  const first = useContext(Theme)
  return (
    <>
    <div style={ first?  {color:"White" , backgroundColor:"Black"} :{color:"Black" , backgroundColor:"white"}}>
    <div><a href="#">Home </a> </div>
    <div><a href="#">contact </a> </div>
    <div><a href="#"> service </a> </div>
</div>
</>
    )
}

export default Comp