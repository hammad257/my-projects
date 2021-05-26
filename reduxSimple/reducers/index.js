import { combineReducers } from "redux";


 const songReducer = () => {
    return [
        {title:'No Scrub', duration:'10:45'},
        {title:'Trip to Italy', duration:'0:45'},
        {title:'Hello world', duration:'2:45'},
        {title:'Dark', duration:'5:45'},
    ]
}

const selectedSongReducer = (selectedSongs = null, action) => {
     if(action.type === 'SELCT_SONGS'){
     return action.payload
}
  return selectedSongs
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
})
