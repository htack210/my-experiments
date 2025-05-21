import {useState, useEffect} from 'react';

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFethcing] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFethcing(true); // While fetching data
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            if (!response.ok) {
                console.log(resData.message);
                throw new Error(resData.message || 'Something went wrong!');
            }
            setPosts(resData.posts);
            setIsFethcing(false); // After fetching data
            }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>)}
            {!isFetching && posts.length === 0 && <div style={{textAlign:'center', color:'white'}}>
                <h2 className={classes.noPosts}>No posts yet!</h2>
                <p>Add some!</p></div>}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post, idx) => (
                    <Post key={idx} name={post.author} body={post.body}  />
                ))}
            </ul>
            )}
            {isFetching && 
                <div>
                    <p style={{textAlign:'center', color:'white'}}>Loading...</p>
                    </div>
            }
        </>
    );
}

export default PostsList
