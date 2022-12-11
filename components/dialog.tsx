import style from "../styles/Dialog.module.css";

export function Dialog({children, onClose}) {
    return (
        <div className={style['dialog-mask']} onClick={onClose}>
            <div className={style.dialog}>
                <div className={style['dialog-cta']}>
                    {children}
                </div>
            </div>
        </div>
    )
}