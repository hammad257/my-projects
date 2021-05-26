import React from 'react';

const List = ({ourList,removeItem,itemEdit}) => {
    return ( 
        <div>
           {ourList.map((item)=>{
               return <div key={item.id}>
                       <p>{item.title}</p>
                       <div style={{marginLeft:'150px',marginTop:-30}}>
                       <button onClick={()=>removeItem(item.id)}>Delete</button>
                       <button onClick={()=>itemEdit(item.id)}>Editt</button>
                       </div>
                     </div>
           })} 
        </div>
    ); 
}
 
export default List;