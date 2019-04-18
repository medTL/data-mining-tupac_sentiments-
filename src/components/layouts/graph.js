import React, { Component } from 'react'
import Spinner from './spinner'
import ReactDOM from 'react-dom'
import {ImageOnLoad as Img} from 'react-image-onload';
import './graph.css'





 class Graph extends Component {
 state ={
     isLoading:true,
     isOpen:false,
     loaded:false
 }
 handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('cliked');
  };

     
   render() {
       const {id} = this.props;
       const{isLoading} = this.state
       const graph_url = 'http://localhost:8000/graph/'+id;
       const graph_style={
           
      

       }
       if(isLoading ){
           console.log(isLoading)
          
           return ( 
           <div id="spin">
           <Spinner />
           </div>
           )
           
       }else if(!isLoading){
        console.log(isLoading)
    return (
    
         <div className="container">
        <img ref="don"
          
          src={graph_url}
          onClick={this.handleShowDialog}
          
          alt=""
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={graph_url}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>



      
    )
       }
  }

      
  componentDidMount(){
    

   this.setState({isLoading:false})
     
   
  
}
 }

export default Graph;