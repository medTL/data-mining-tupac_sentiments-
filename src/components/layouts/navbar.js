import React from 'react';
import {css} from 'glamor';

const style = css({
    width: '100%',
    height: '200px',
    backgroundImage: 'url(../../../public/tupac.jpg)',
});
const Navbar = ()=> {
  return (
     <div >
    <nav className="navbar navbar-dark bg-dark  ">
    <span className="navbar-brand mb-0 h1 mx-auto">TUPAC SENTIMENT</span>

    </nav>
    <div className="profile">
    <div class="jumbotron " >
     <div class="artist"></div>
     </div>
  </div>
  </div>
 
  )

}
export default Navbar;
