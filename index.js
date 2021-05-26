import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Grocery from "./grocerybud/index";
import Pagination from "./Pagination/index";
import CPI from "./CAPI/index";
import Search from "./Search";
import Accordion from "./Accordian";
import Convert from "./Translate/Convert";
import Translate from "./Translate/Translate";
import Search1 from "./Search1/search1"
import Select from "./Dropdown1/select";
import Covid from "./recursive/index";
import Streams from "./Streams/index";
import SimpleRedux from "./reduxSimple/index";
import Anil from "./AnilSidhu/index";
import Main from "./AnilSidhu/main";

//Blog Post
// import BlogPost from "./Post/components/BlogPost";
// import NewPost from "./Post/components/newPost";
// import { Provider } from "react-redux";
// import { createStore,applyMiddleware } from "redux";
// import reducres from "./Post/reducres/index";
// import promise from "redux-promise";
// import { BrowserRouter,Switch,Route } from "react-router-dom";
// const applyMiddlewareWithSystem = applyMiddleware(promise)(createStore)


ReactDOM.render(
  <React.StrictMode>
    <Streams/>
    {/* <Provider store={applyMiddlewareWithSystem(reducres)}>
      <BrowserRouter>
      <Switch>
      <Route path="/posts/new" component={NewPost}/>
      <Route path="/" component={BlogPost}/>
      </Switch>
      </BrowserRouter>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
