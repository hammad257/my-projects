import React, { Component } from 'react';
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";


class SimpleRedux extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Provider store={createStore(reducers)}>
                <App/>
                </Provider>
            </div>
         );
    }
}
 
export default SimpleRedux;