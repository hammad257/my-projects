import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn,signOut } from "../actions/index";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'470816659413-c9fdtb7pk57ltvpda9ski0dii1bot1et.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange) 
            }) ;
        });
    }

    onSignInClikck=()=>{
        this.auth.signIn(); 
    };

    onSignOutClick=()=>{
        this.auth.signOut();
    }

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    renderList(){
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return <button onClick={this.onSignOutClick} className="ui red google button">
                          <i className="google icon"/>
                          Sign Out
                   </button>
        }else{
            return <button onClick={this.onSignInClikck} className="ui red google button">
                   <i className="google icon"/>
                   Sign In With Google
            </button>
        }
    }

    render() { 
        

        return ( 
            <div>
                {this.renderList()}
            </div>
         );
    }
}

const mapStateToProps=(state)=>{
   return {isSignedIn: state.auth.isSignedIn };
}
 
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);