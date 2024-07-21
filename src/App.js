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

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "My First Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 2,
            title: "My 2nd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 3,
            title: "My 3rd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 4,
            title: "My Fourth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
    ]);

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    // In ReactRouter v6 useHistory is replaced by useNavigate
    // const history = useHistory();
    const navigate = useNavigate();

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
                <Route index element={<Home posts={posts} />} />
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
