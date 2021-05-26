import React, { Component } from 'react';
import Unmout from "./unmount";

class Anil extends Component {
    state = { 
        active:null,
        who:null,
        toggle:true
     }

componentDidUpdate(){                        //comonentDidupdate when we update the state then cdu will run
    console.log('compoentdidUpdate')         //comoenetWillunmount when our compoenet is destroy it means we unmount 
    if(this.state.who == null){              //the data into the dom like we show simple message like user 
                                             //has been removed
    this.setState({who:'Hamad-Azam'})
    }
}

    render() { 
        return ( 
            <div>
                <h2>ComponentDidUpdate {this.state.who}</h2>
                <button onClick={()=>this.setState({active:'yes'})}>Done</button>
                <div>
                <h2>ComponentWillUnmout</h2>
                { this.state.toggle ? <Unmout/> : null }
                <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
                </div>              
             </div>
         );
    }
}
 
export default Anil;