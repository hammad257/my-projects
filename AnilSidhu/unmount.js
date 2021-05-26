import React, { Component } from 'react';

class Unmout extends Component {
    state = { }

    componentWillUnmount(){
        alert('user has been delted')
    }

    render() { 
        return ( 
            <div>
                <ul>
                    <li>Name:Hamad</li>
                    <li>Email:azamhamad77@gmail.com</li>
                    <li>Contact: 03354896343</li>
                </ul>
              
            </div>
         );
    }
}
 
export default Unmout;