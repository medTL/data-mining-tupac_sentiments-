import React, { Component } from 'react';
import axios from 'axios';
import { Param } from 'glamorous';

const Context = React.createContext();



export class Provider extends Component {
  state = {
    track_list: [],
  
    
   
  };

  componentDidMount() {
  axios.get('http://localhost:8000/songs'
        
      )
      .then(res => {
        // console.log(res.data);
         this.setState({track_list:res.data})

        
      })
      .catch(err => console.log(err));
      
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;