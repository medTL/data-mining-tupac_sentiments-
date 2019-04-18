import React, { Component } from 'react'


import axios from 'axios'
import Spinner from '../layouts/spinner'
import { Link } from 'react-router-dom';
import './lyrics.css'

import Highlighter from 'react-highlight-words'
import Graph from '../layouts/graph'
import styled, { keyframes } from 'styled-components';
import  An from '../layouts/neg_animation';





class lyrics extends Component {
    state ={
        lyrics : [],
        songinfo:[],
        g_percentage:[],
        sentiments: []
    }
  render() {
    const {lyrics,songinfo,g_percentage,sentiments} = this.state;
   const meta = songinfo[0]
    const songnmae = lyrics[1]
    
   

    
    if(lyrics === undefined || lyrics.length === 0 ||
       songinfo == undefined || songinfo.length === 0 ||
       g_percentage === undefined || g_percentage.length ===0 ||
       sentiments === undefined || sentiments.length === 0){
       
      return <Spinner/>
    }else{
      const per_pos_values = g_percentage[1]
      const per_neg_values = g_percentage[0]

      console.log("Negative: "+per_neg_values.n)
      console.log("Postive : "+per_pos_values.n)
      const per_pos_deg =per_pos_values.n/(per_neg_values.n+per_pos_values.n)*180
 

      
      const per_neg_deg = per_neg_values.n/(per_neg_values.n+per_pos_values.n)*180
      
      let neg_words =[]
        let pos_words =[]
        let neu_words =[]
      for(let i =0 ; i<sentiments.length;i++){
        let senti_obj = sentiments[i];
        
        if(senti_obj.sentiment === "negative"){
          neg_words.push( senti_obj.word)

        }else if(senti_obj.sentiment === "positive"){
          pos_words.push(senti_obj.word)
        }else{
          neu_words.push( senti_obj.word)
        }
      }
           
            
           

          
        
       
        const pos_style ={
          transform:`rotate(${per_pos_deg}deg)`,
          
        };
        const neg_style ={
          transform:`rotate(${per_neg_deg}deg)`,
         
          
        };
        
        const neg_animation = keyframes`
  from {
    transform: rotate(0deg);
  }

 to{
    transform: rotate(${per_neg_deg} deg);
  }`;
  const Bar = styled.style`
  .circle-wrap .circle .mask.full,
  .circle-wrap .circle .fill {
  transform:rotate(${per_neg_deg}deg);
   animation:${neg_animation} ease-in-out 3s;
  
  }`;
         
        const graph_url = 'http://localhost:8000/graph/'+this.props.match.params.id
        
        const graph_style ={
          
            backgroundImage : `url(${graph_url})`,
            backgrounRepeat:`no-repeat`
        };
        
     
       

       
        
     
    return (
     
      <React.Fragment>
        <div id="gen_sentiment" >
       <div className="pos-circle">
        <div class="circle-wrap">
          <div class="circle">
      
            <An  className="mask full" style={pos_style} >
          
              <An  className="fill" style={pos_style}  ></An>
              
              </An>
   
             
    <div  className="mask half">
      <An  className="fill" style={pos_style} ></An>
    </div>
   
    <div class="inside-circle">
    {Math.round(per_pos_values.n/(per_neg_values.n+per_pos_values.n)*100,2)}%
	  </div>
    </div>
    
	</div>
  <h5>Positive</h5>
  </div>
  <div className="graph" >  
      
      <Graph id={this.props.match.params.id}></Graph>
  </div>
  <div className="neg-circle">
  <div class="circle-wrap">
          <div class="circle">
            <An className="mask full"  style={neg_style}>
              <An  className="fill" style={neg_style} ></An>
              </An>
   
    <div className="mask half">
      <An className="fill"  style={neg_style}></An>
    </div>
    
    <div class="inside-circle">
      {Math.round(per_neg_values.n/(per_neg_values.n+per_pos_values.n)*100,2)}%
	  </div>
    </div>
	</div>
  <h5>Negative</h5>
  </div>     



          
        </div>

        <div id="songlyrics">
         <Link to="/" className="btn btn-dark btn-mm mb-1 ">Go Back</Link>
       <div className="card" >
       
       <div className="card-header" id="songheader">
       <img id="songImage" src={meta.song_art_image_url}></img>
       <h5 id="songname2">{songnmae.song_name}</h5>
       <ul class="list-inline text-center mt-4 " id="song-info">
  <li class="list-inline-item mr-4 display-6">Album : {meta.album_name}</li>
  <li class="list-inline-item display-6">Release Date: {meta.release_date}</li>
 
</ul>
       
       </div>
            
       
       <div className="card-body">
       
        
           
        {lyrics.map(item=>(
          <p>
           <Highlighter
           highlightClassName="pos_style"
           searchWords={pos_words}
           autoEscape={true}
           textToHighlight={item.line }/>
            <Highlighter
           highlightClassName="neg_style"
           searchWords={neg_words}
           autoEscape={true}
           textToHighlight={item.line }/>
           </p>
        )

        )}
        
    
       </div>
       </div>
          
      </div>
      </React.Fragment>
    )
          }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/songlyric/'+this.props.match.params.id
    
      )
      .then( res=>{
        this.setState({lyrics:res.data.lyrics})
        this.setState({songinfo:res.data.song_meta})
        
      })
      .catch(err=> console.log(err))
      axios.get('http://localhost:8000/sentiment/'+this.props.match.params.id)
  .then( res => {
    this.setState({g_percentage:res.data.percentage})
    this.setState({sentiments:res.data.word_sentiment})
  })
  .catch(err => console.log(err))


  }
   
     
    
  
  
 
}
export default lyrics;