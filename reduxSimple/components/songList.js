import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectedSong } from "../actions/index";


class SongList extends Component {
 
 renderList(){
     return this.props.songs.map((song)=>{
         return (
             <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                    onClick={()=>this.props.selectedSong(song)} 
                    className="ui button primary">
                         Select
                    </button>
                </div>
                <div className="content">{song.title}</div>
             </div>
         )
     })
 }
    
    render() {
        //  console.log(this.props)
        return (
            <div style={{margin:20}}> 
            <div className="ui divided list">
                {this.renderList()}
            </div>
            </div>
         );
    }
}

const mapStateToProps=(state)=>{
    console.log(state) 
   return {
       songs:state.songs
   }
}
 
export default connect(mapStateToProps,{selectedSong})(SongList);