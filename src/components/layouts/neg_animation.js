import React from 'react'
import styled,{keyframes} from 'styled-components'
const deg = 50;

const anim = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(100 deg );
  }

`;
const An =styled.div`

width: 150px;
height: 150px;
position: absolute;
border-radius: 50%;

transform: rotate( 100 deg);
animation: ${anim} ease-in-out 3s;

`;

 
  





export default  An;