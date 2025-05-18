import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal';
import classes from './PostsList.module.css';

const { posts } = classes;

function PostsList({ isPosting, onStopPosting }) {
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                    />
                </Modal>)};

            <ul className={posts}>
                {/* <Post name={enteredAuthor} body={enteredBody} /> */}
                <Post name="Jim" body="Glenn's too old to learn this stuff." />
            </ul>
        </>
    );
}

export default PostsList
