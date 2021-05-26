import React, { Component } from 'react';

class Paginate extends Component {
    state = {  }
    render() { 
        const {totalCount,currentPage,nextPage,Pagination} = this.props
           const PageNumber = [];
        for(let i=1;i<=totalCount/nextPage;i++){
             PageNumber.push(i)
        }
        
        return (  
               <div>
                  <ul className="pagination">
                      {PageNumber.map((number)=>{
                          return <li onClick={()=>Pagination(number)} className={currentPage === number ? "page-item active" : "page-item"}>
                          <a className="page-link">{number}</a>
                      </li>
                      })}
                    
                  </ul>
               </div>
         );
    }
}
 
export default Paginate;