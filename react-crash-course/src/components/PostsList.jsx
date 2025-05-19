import {useState} from 'react';

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal';
import classes from './PostsList.module.css';

const { posts } = classes;

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>)}

            <ul className={posts}>
                {/* <Post name={enteredAuthor} body={enteredBody} /> */}
                <Post name="Jim" body="Glenn's too old to learn this stuff." />
            </ul>
        </>
    );
}

export default PostsList
