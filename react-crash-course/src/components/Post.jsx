import classes from './Post.module.css';

const { post, author, text } = classes

function Post({ name, body }) {
    return (
        <li className={post}>
            <p className={author}>{name}</p>
            <p className={text}>{body}</p>
        </li>
    )
}

export default Post;