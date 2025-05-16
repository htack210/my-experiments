import Post from './Post'
import NewPost from './NewPost'
import classes from './PostsList.module.css';
import { useState } from 'react';

const DEFAULT_BODY = 'Enter text';
const DEFAULT_AUTHOR = 'Enter author name';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('Enter text')
    const [enteredAuthor, setEnteredAuthor] = useState('Enter author name')

    function bodyChangeHandler(event) {
        const value = event.target.value
        setEnteredBody(value == '' ? DEFAULT_BODY : value);
    }

    function authorChangeHandler(event) {
        const value = event.target.value
        setEnteredAuthor(value == '' ? DEFAULT_AUTHOR : value);
    }

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post name={enteredAuthor} body={enteredBody} />
                <Post name="Jim" body="Glenn's too old to learn this stuff." />
                <Post name="Anne" body="Agree. He should have invested at a much younger age. Then he wouldn't still be working." />
                <Post name="anonymous" body="What a LOSER! HAHAHAHA!" />
            </ul>
        </>
    )
}

export default PostsList
