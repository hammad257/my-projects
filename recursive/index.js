import React, { useState,useEffect } from 'react';

const Covid = () => {

  const [data, setData] = useState([])

  const getapiData = async() => {
    const response = await fetch('https://api.covid19india.org/data.json')
    const result = await response.json()
    setData(result.statewise)
  }

  useEffect(()=>{
    getapiData()
  },[])


  return ( 
    <div>
      <div className="container-fluid">
        <div className="main-heading">
           <h1>INDIA Covid 19 Tracking</h1>
        </div>
        <div className="table-responsive">
            <table className="table table-hover">
               <thead className="thead-dark">
                  <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>recoverd</th>
                    <th>deaths</th>
                    <th>active</th>
                    <th>update</th>
                  </tr>
               </thead>
               <tbody>
                 {data.map((curelemt, ind)=>{
                   return(  <tr>
                   <td>{curelemt.state}</td>
                   <td>{curelemt.confirmed}</td>
                   <td>{curelemt.recovered}</td>
                   <td>{curelemt.deaths}</td>
                   <td>{curelemt.active}</td>
                   <td>{curelemt.lastupdatedtime}</td>
                 </tr>
                 )})}
                  
               </tbody>
            </table>
        </div>
      </div>
    </div>
   );
}
 
export default Covid;