import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* There's a difference between version 5 and 6 in react router*/}
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="post" element={<NewPost />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
