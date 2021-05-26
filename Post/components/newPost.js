import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

class NewPost extends Component {
    
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                {...field.input}
                />
                <p>{field.meta.error}</p>
            </div>
        )
    }
      onSubmit(values) {
           this.props.createPost(values, ()=>{
               this.props.history.push('/');
           });
      }

    render() { 
        const {handleSubmit} = this.props
        return ( 
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} style={{margin:20}}>
                <Field
                 label="Title for post" 
                 name="title"
                 component={this.renderField}
                 /> 
                 <Field
                 label="Categories" 
                 name="categories"
                 component={this.renderField}
                 />
                  <Field
                 label="Post Content" 
                 name="content"
                 component={this.renderField}
                 />
                 <button type="submit" className="btn btn-primary">Submit</button>
                 <Link to="/" className="btn btn-danger">
                   Cancel
                 </Link>
            </form>
         );
    }
}

// function Validate(values){
//    const errors={}

//    if(!values.title){
//        errors.title = 'Enter a Title'
//    }
//    if(!values.categories){
//        errors.categories = 'Enter some Categories'
//    }
//    if(!values.content){
//     errors.content = 'Enter some a content'
//    }

//    return errors;
// }
 
export default reduxForm({
    form: 'postsNewForm'
})(
    connect(null,{createPost})(NewPost)
);