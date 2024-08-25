import {Component} from "react"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import BlogData from "./components/BlogData"
import PostDetailView from "./components/PostDetailView"
import UpdatePost from "./components/UpdatePost"

import './App.css';

class App extends Component{

  render(){
    return(

     <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} ></Route>
        <Route path = "/posts" element = {<BlogData />} ></Route>
        <Route path = "/postdetailview/:id" element = {<PostDetailView />} ></Route>
        <Route path = "/updatepost/:id" element = {<UpdatePost />} ></Route>
      </Routes>
      </BrowserRouter>
     </>

    )
  }
}

export default App;
