import Post from './Post'
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post name="Glenn" body="ReactJS has a lot of moving parts." />
            <Post name="Jim" body="Glenn's too old to learn this stuff." />
            <Post name="Anne" body="Agree. He should have invested at a much younger age. Then he wouldn't still be working." />
            <Post name="anonymous" body="What a LOSER! HAHAHAHA!" />
        </ul>
    )
}

export default PostsList
