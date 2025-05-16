import classes from './Post.module.css';

function Post({ name, body }) {

    return (
        <li className={classes.post}>
            <p className={classes.author}>{name}</p>
            <p className={classes.text}>{body}</p>
        </li>
    )
}

export default Post;