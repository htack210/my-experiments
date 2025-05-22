import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

const { backdrop, modal } = classes;

export default function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..');
       
    }
    return (
        <>
            <div className={backdrop} onClick={closeHandler} />
            <dialog open className={modal}>
                {children}
            </dialog>
        </>
    );
}

