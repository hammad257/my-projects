import React, { Component } from 'react';

class List extends Component {
    state = {  }
    render() {
        const {ourList} = this.props 
        return ( 
            <div>
                {ourList.map((item)=>{
                   return <ul>{item.title}</ul>
                })}
            </div>
         );
    }
}
 
export default List;