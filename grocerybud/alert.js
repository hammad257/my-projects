import React,{useEffect} from 'react';

const Alert = ({msg,showAlert}) => {

  useEffect(()=>{
    const timeOut = setTimeout(() => {
         showAlert()
    }, 2000);
    return ()=>clearTimeout(timeOut)
  },[])  
  
    return ( 
        <div>
            {msg}
        </div>
     );
}
 
export default Alert;