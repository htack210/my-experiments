import classes from './Modal.module.css';

const { backdrop, modal } = classes;

export default function Modal({ children, onClose }) {
    return (
        <>
            <div className={backdrop} onClick={onClose} />
            <dialog open className={modal}>
                {children}
            </dialog>
        </>
    );
}

