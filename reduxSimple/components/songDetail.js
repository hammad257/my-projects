import React from 'react';
import { connect } from "react-redux";

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a Song</div>
    }
    
    return ( 
        <div>
            <h2>Detail Info:</h2>
            <div>Title: {song.title}</div>
            <div>Duration: {song.duration}</div>
        </div>
     );
}

const mapStateToProps =(state) => {
   return {song:state.selectedSong}
}
 
export default connect(mapStateToProps)(SongDetail);