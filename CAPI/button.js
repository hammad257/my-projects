import React from 'react';
import languageContext from "./contexts/languageContext";

class Button extends React.Component {
   renderButton(value){
      return value === 'english' ? 'Submit' : 'Voorlegen'
   }

    render(){
    return ( 
        <div>
             <button className="ui button primary">
                 <languageContext.Consumer>
                 {(value)=>this.renderButton(value)}
                 </languageContext.Consumer>
             </button>
        </div>
     ); 
}
}

export default Button;