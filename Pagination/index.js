import React, { Component } from 'react';
import List from "./list";
import Paginate from "./pagination";

class Pagination extends Component {
    state = { 
        list:[],
        currentPage:1,
        nextPage:10
     }
   
     componentDidMount() {
         fetch('http://jsonplaceholder.typicode.com/posts')
         .then((res)=>res.json())
         .then((result)=>this.setState({list: result}))
     }
     
     Pagination=(PageNumber)=>{
         this.setState({currentPage: PageNumber})
     }

    render() {
         const {currentPage,nextPage,list} = this.state
        const indexOfLastPage = currentPage * nextPage;
        const indexOfFirstPage = indexOfLastPage - nextPage;
        const gettingPage =  list.slice(indexOfFirstPage,indexOfLastPage)

        return ( 
            <div className="container">
                <h2 className="text-primary">Your Pagination Blog Item</h2>
                <List ourList={gettingPage}/>
                <Paginate
                Pagination={this.Pagination}
                nextPage={this.state.nextPage}
                currentPage={this.state.currentPage} 
                totalCount={this.state.list.length}/>
            </div>
         );
    }
}
 
export default Pagination;