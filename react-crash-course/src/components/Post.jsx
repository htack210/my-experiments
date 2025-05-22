import {Link} from 'react-router-dom';
import classes from './Post.module.css';

const { post, author, text } = classes

function Post({ name, body }) {
    return (
        <li className={post}>
            <Link to={id}>
                <p className={author}>{name}</p>
                <p className={text}>{body}</p>
            </Link>
        </li>
    )
}

export default Post;