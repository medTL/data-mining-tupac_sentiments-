import React, { Component } from 'react'

 class Search extends Component {
     state ={
        trackTitle:'',
        track_list:[]
     }
     onChange =e =>{
         this.setState({[e.target.name]:e.target.value})
     }
 findtrack =(e)=>{
    e.preventDefault();
    this.props.search(this.state.trackTitle);
 }
  render() {
    return (
      <div className="card card-body mb-4  p-4">
      <h6 className="display-4 text-center mt-5"><i className="fas fa-music"></i> Search for a song</h6>
        <form onSubmit={this.findtrack}>
            <div className="form-group">
            <input type="text"className="form-control form-control-lg" 
            placeholder="song title ..."
            name="trackTitle"
            value={this.state.trackTitle}
            onChange={this.onChange}
            />
            <button className="btn btn-primary btn-lg btn-block mb-5 mt-2"
            type="submit"

            >Get song</button>
            </div>
        </form>
      </div>
    )
  }
}
export default Search;