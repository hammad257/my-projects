import React, { Component } from 'react';
import Anil from "./index";
import UseRef from "./ref";
import PurCompo from "./purComponent";
import MemoReact from "./memo/index";

class Mian extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <MemoReact/>
            </div>
         );
    }
}
 
export default Mian;