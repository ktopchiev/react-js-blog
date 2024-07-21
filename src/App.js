import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
//In ReactRouter useHistory is replaced by useNavigate
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';


function App() {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    // In ReactRouter v6 useHistory is replaced by useNavigate
    // const history = useHistory();
    const navigate = useNavigate();

    useEffect(() => {
        const filteredResults = posts.filter(post => 
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

            setSearchResult(filteredResults.reverse());
    },[posts, search])

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = { id, title: postTitle, datetime, body: postBody };
        const postsList = [...posts, newPost];
        setPosts(postsList);
        setPostTitle('');
        setPostBody('');
        navigate("/");
    }

    const handleDelete = (id) => {
        const postsList = posts.filter((post) => post.id !== id);
        setPosts(postsList);
        // history.push('/');
        navigate("/");
    }

    return (
        <div className="App">
            <Header title={"React JS Blog"} />
            <Nav search={search} setSearch={setSearch} />
            {/* There's a difference between version 5 and 6 in react router*/}
            <Routes>
                <Route index element={<Home posts={searchResult} />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
                <Route
                    path="post"
                    element={<NewPost
                        postTitle={postTitle}
                        setPostTitle={setPostTitle}
                        postBody={postBody}
                        setPostBody={setPostBody}
                        handleSubmit={handleSubmit}
                    />}
                />
                <Route path="*" element={<Missing />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
