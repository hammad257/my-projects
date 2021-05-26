import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import _ from "lodash";
import { Link } from "react-router-dom";


class BlogPost extends Component {
    componentDidMount() {
       this.props.fetchPosts()    
    }
    renderList(){
        return _.map(this.props.posts, post=>{
             return <li className="list-group-item" key={post.id}>
                       {post.title}
                   </li>
        })
    }

    render() { 

        return ( 
            <div style={{margin:20}}>
            <div style={{marginTop:10,marginLeft:'1200px'}} className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                  Add a Post
                </Link>
            </div>
            <ul style={{marginTop:10}} className="list-group">
               {this.renderList()}
            </ul>
        </div>
         );
    }
}

const mapStateToProps=(state)=>{
   return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(BlogPost);