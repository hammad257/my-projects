import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import StreamCrteate from "./streams/streamCreate";
import StreamDelte from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import Header from "./Header";

const App = () => {
    return ( 
        <div className="ui container">
            <BrowserRouter>
              <div>
                  <Header/>
                  <Route path="/" exact component={StreamList}/>
                  <Route path="/streams/new"  component={StreamCrteate}/>
                  <Route path="/streams/edit" component={StreamEdit}/>
                  <Route path="/streams/delete" component={StreamDelte}/>
                  <Route path="/streams/show" component={StreamShow}/>
              </div>
            </BrowserRouter>
        </div>
     );
}
 
export default App;