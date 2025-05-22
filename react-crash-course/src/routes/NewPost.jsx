import { useState } from 'react'
import { Link } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

const { form, actions } = classes
const DEFAULT_BODY = 'Enter text';
const DEFAULT_AUTHOR = 'Enter author name';

function NewPost({ onAddPost}) {
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
    return (
    <Modal>
    <form className={form} onSubmit={submitHandler}>
        <p> <label htmlFor="body" >Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
            <label htmlFor="name" >Your name</label>
            <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={actions}>
            <Link to='..' type='button'>Cancel</Link>
            <button>Submit</button>
        </p>
    </form>
    </Modal>
    )
}

export default NewPost;