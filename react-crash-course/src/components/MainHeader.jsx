import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
const { header, logo, button } = classes

function MainHeader() {
    return (
        <header className={header}>
            <h1 className={logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <Link className={button} to="/create-post">
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;