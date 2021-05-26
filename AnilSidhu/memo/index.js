import React, { useState } from 'react';
import Home from "./Home";
//internal copoenet again aand again load so we use memoization

const MemoReact =()=> {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);  
        return ( 
            <div>
                <h2>Memo Compoenet {count}</h2>
                <Home data={data}/>
                <button onClick={()=>setCount(count+1)}>Count</button>
            </div>
         );
    }


export default MemoReact;