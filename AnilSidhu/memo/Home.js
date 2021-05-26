import React,{memo} from 'react';
//memo prevent the inner componet load again again with render

const Home = (props) => {
    console.log('inner compoenet',props.data)
    return ( 
        <div>Home</div>
     );
}
 
export default memo(Home);