import React, { useState } from 'react';

const DropDown = ({options,setSelected,selected}) => {

const [open, setOpen] = useState(false)
    
  const renderOption = options.map((option)=>{
     if(option.value == selected.value){ 
          return null
     }

      return(
          <div 
           className="item"
           key={option.value}
            onClick={()=>setSelected(option)}>
             {option.label}
          </div>
      )
  })

    return ( 
        <div className="ui form">
           <div className="field">
              <label className="label">Select a colorrrrr</label>
              <div 
              onClick={()=>setOpen(!open)}
              className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                 <i className="dropdown icon"></i>
                 <div className="text">{selected.label}</div>
                 <div className={`menu ${open ? 'visible transition' : ''}`}>
                     {renderOption}

                 </div>
              </div>
           </div>
        </div>
     );
}
 
export default DropDown;