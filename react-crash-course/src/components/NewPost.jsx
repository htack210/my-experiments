import { useState } from 'react'

import classes from './NewPost.module.css';

const { form, actions } = classes
const DEFAULT_BODY = 'Enter text';
const DEFAULT_AUTHOR = 'Enter author name';

function NewPost({ onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('Enter text')
    const [enteredAuthor, setEnteredAuthor] = useState('Enter author name')

    function bodyChangeHandler(event) {
        const value = event.target.value
        setEnteredBody(value == '' ? DEFAULT_BODY : value);
    }

    function authorChangeHandler(event) {
        const value = event.target.value;
        setEnteredAuthor(value == '' ? DEFAULT_AUTHOR : value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }
    return (<form className={form} onSubmit={submitHandler}>
        <p> <label htmlFor="body" >Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
            <label htmlFor="name" >Your name</label>
            <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
    </form>);
}

export default NewPost;