import React from 'react'

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody,  handleSubmit }) => {
    return (
        <main>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type='text'
                    placeholder='Post Title'
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    className="postBody"
                    id="postBody"
                    placeholder="Post Body"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                ></textarea>
                <button type="submit">Add New Post</button>
            </form>
        </main>
    )
}

export default NewPost