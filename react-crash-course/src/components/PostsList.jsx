import { useLoaderData } from 'react-router-dom';
import Post from './Post'
import classes from './PostsList.module.css';

function PostsList() {
    const posts = useLoaderData();

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {posts.length === 0 && <div style={{ textAlign: 'center', color: 'white' }}>
                <h2 className={classes.noPosts}>No posts yet!</h2>
                <p>Add some!</p></div>}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, idx) => (
                        <Post key={idx} name={post.author} body={post.body} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default PostsList
