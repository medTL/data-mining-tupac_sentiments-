import React from 'react'
import Tracks from '../tracks/Tracks';
import Navbar from './navbar';
import Search from '../tracks/Search'
import {Spring} from 'react-spring/renderprops';

const Index = ()=> {

  return (
   <React.Fragment>
     
      <Navbar/>

       <Tracks/>
   </React.Fragment>
  )
}
export default Index;