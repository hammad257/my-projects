import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Search1 = () => {

   const [term, setTerm] = useState('programming');
   const [results, setResults] = useState([])


    useEffect(()=>{
       const search = async() => {
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
              params:{
                  action:'query',
                  list:'search',
                  origin:'*',
                  format:'json',
                  srsearch:term
              },
          });
          setResults(data.query.search)
       }
       const timeoutId = setTimeout(() => {
         if(term){
           search()
           }
       }, 500);
       return ()=>{
           clearTimeout(timeoutId)
       }
    },[term])
   
    const renderList = results.map((result)=>{
        return <div className="item" key={result.pageid}>
            <div className="right floated content">
              <a 
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
            </div>
           <div className="content">
              <div className="header">
                  {result.title}
              </div>
              <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
              
           </div>
        </div>
    })

    return ( 
        <div style={{margin:20}}>
        <div className="ui form">
            <div className="field">
                <label>Enter Seatch Term</label>
                <input
                className="input"
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
                />
            </div>
        </div>
        <div className="ui celled list">
            {renderList}
        </div>
        </div>
     );
}
 
export default Search1;