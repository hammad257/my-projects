import React, { Component } from 'react';
import UserCreate from "./userCreate";
import languageContext from "./contexts/languageContext";

class CAPI extends Component {
    state = { 
        language:'english'
     }

     onLanguageSelect=(language)=>{
        this.setState({language})
     }

    render() { 
        return ( 
            <div className="ui container">
                <div>
                    <i className="flag us" onClick={()=>this.onLanguageSelect('english')}/>
                    <i className="flag nl" onClick={()=>this.onLanguageSelect('dutch')}/>
                </div>
                <languageContext.Provider value={this.state.language}>
                 <UserCreate/>
                 </languageContext.Provider>
                </div>
         );
    }
}
 
export default CAPI;