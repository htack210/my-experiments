import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
const { header, logo, button } = classes

function MainHeader({ onCreatePost }) {
    return (
        <header className={header}>
            <h1 className={logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <button className={button} onClick={onCreatePost}>
                    <MdPostAdd size={18} />
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader;