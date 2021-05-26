import React from 'react';
import languageContext from "./contexts/languageContext";

class Field extends React.Component {
   static contextType  = languageContext;

    render(){
        const text = this.context === 'english' ? 'Name' : 'Naam'
    return ( 
        <div>
            <label>{text}</label>
            <input/>
        </div>
     ); 
}
}

export default Field;