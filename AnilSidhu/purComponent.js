import React, { Component,PureComponent } from 'react';
//if component generate same output then we use pure compoenet and we do not render compoent again and again

class PurCompo extends PureComponent {
    constructor(){
        super();
        this.state={
            data:10
        }
    }

    render() { 
        console.log(this.state)
        return ( 
            <div>
                <h2>PurComponent {this.state.data}</h2>
                <button onClick={()=>{this.setState({data:20})}}>Update State</button>
            </div>
         );
    }
}
 
export default PurCompo;