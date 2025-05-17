import classes from './Modal.module.css';

const { backdrop, modal } = classes;

export default function Modal({ children }) {
    return (
        <>
            <div className={backdrop} />
            <dialog open className={modal}>
                {children}
            </dialog>
        </>
    );
}

