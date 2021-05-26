import React, { Component } from 'react';
//By use of ref we modify the dom


class UseRef extends Component {
    constructor(){
        super();
        this.userRef = React.createRef();
    }

    editVal(){
        console.log(this.userRef)
        this.userRef.current.value="10000"
    }

    render() { 
        return ( 
            <div>    
                <h2>Use Ref in React</h2>
                <input ref={this.userRef} type="text" name="user"/>
                <button onClick={()=>this.editVal()}>Click Me</button>  
                    </div>      
         );                         
    }
}
 
export default UseRef;