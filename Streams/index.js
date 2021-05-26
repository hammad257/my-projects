import React, { Component } from 'react';
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers)

class Streams extends Component {
    render() { 
        return ( 
            <div>
                <Provider store={store}>
                <App/>
                </Provider>
            </div>
         );
    }
}
 
export default Streams;