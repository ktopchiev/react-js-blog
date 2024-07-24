import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditPost = ({ posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit }) => {
    const { id } = useParams();
    const post = posts.find((post) => (post.id).toString() === id);
    console.log(post);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                if (post) {
                    setEditTitle(post.title);
                    setEditBody(post.body);
                }
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }

        fetchPosts();

    }, [post, setEditTitle, setEditBody])

    return (
        <main className='NewPost'>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type='text'
                    placeholder='Post Title'
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    className="postBody"
                    id="postBody"
                    placeholder="Post Body"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                ></textarea>
                <button type="submit" onClick={() => handleEdit(post.id)}>Edit Post</button>
            </form>
        </main>
    )
}

export default EditPost