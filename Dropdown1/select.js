import React, { useState } from 'react';
import Dropdown1 from "./dropdown1";

const options=[
    {
        label:'The color red',
        value:'red'
    },
    {
        label:'The color green',
        value:'green'
    },
    {
        label:'The color blue',
        value:'blue'
    }
]

const Select = () => {
    const [selected, setSelected] = useState(options[0])
    return ( 
        <div>
            <Dropdown1
             setSelected={setSelected}
             selected={selected}
            options={options}/>
        </div>
     );
}
 
export default Select;