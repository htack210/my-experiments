import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

const { form, actions } = classes
const DEFAULT_BODY = 'Enter text';
const DEFAULT_AUTHOR = 'Enter author name';

export default function NewPost() {

    return (
    <Modal>
    <Form method='post' className={form}>
        <p> <label htmlFor="body" >Text</label>
            <textarea id="body" name="body" required rows={3}/>
        </p>
        <p>
            <label htmlFor="name" >Your name</label>
            <input type="text" id = "name" name="author" required/>
        </p>
        <p className={actions}>
            <Link to='..' type='button'>Cancel</Link>
            <button>Submit</button>
        </p>
    </Form>
    </Modal>
    )
}

export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return redirect('/');
}