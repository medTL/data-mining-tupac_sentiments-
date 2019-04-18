import React, { Component } from 'react'
import Spinner from '../layouts/spinner'
import { Consumer } from '../../context';
import Track from './Track';
import Search from './Search';
 class Tracks extends Component {
   state={
     searchvalue:'',
     tracks:[],
     updatedtrack:[]
   }
   searchtrack = (value) =>{
     console.log(value);
    this.setState({searchvalue:value})
   }
  
  render() {
    return (
     <Consumer>
       {
         
         
         value =>{
          const {track_list} = value;
          
          const {searchvalue} = this.state;
          let searchedtrack = []
           if(track_list === undefined || track_list.lenght === 0 ){
              return <Spinner/>
           }else if (searchvalue != ""){
             let arr = []
             let reg = new RegExp('\\b' + searchvalue + '\\b')
             for(let i = 0 ;i< track_list.length;i++){
               let it = track_list[i]
               if(reg.test(it.song_name) || reg.test(it.song_name.toLowerCase() || reg.test(it.song_name.toUpperCase()))){
                 console.log(true)
                 arr.push(it);

               }
             }
            console.log(arr);
           
             return(
            <React.Fragment>
                <Search search ={this.searchtrack}/>
                <h3 className="text-center mb-4 mt-6" id="hed">List of Tracks</h3>
                <div className="row">
               
                {arr.map(item => (
                  
                    <Track key={item.song_id} track={item} />
                  ))}
                </div>
              </React.Fragment>
             )
           }else{
             return(
              <React.Fragment>
              <Search search ={this.searchtrack}/>
              <h3 className="text-center mb-4 mt-6" id="hed">List of Tracks</h3>
              <div className="row">
             
              {track_list.map(item => (
                
                  <Track key={item.song_id} track={item} />
                ))}
              </div>
            </React.Fragment>
             )
           }
         }
       }
     </Consumer>
    )
  }
 
    
}
export default Tracks;