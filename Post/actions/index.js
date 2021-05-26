//react-router+redux-form+post apis
import axios from "axios";
import { useCallback } from "react";

export const FETCH_POSTS="posts";
export const CREATE_POST='createPost';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=newJob0987';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return{
        type:FETCH_POSTS,
        payload:request
    }
}
export function createPost(values){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(()=>useCallback())

    return{
        type:CREATE_POST,
        payload:request
    }
}

