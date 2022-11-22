import style from "../styles/Dir.module.css";

export default function Dir({children}) {
    return (

        <>
            <style jsx>{`
              .visible {
                visibility: visible;
                transform: translateX(0) !important;
                transition: transform .2s cubic-bezier(.4, 0, .2, 1), -webkit-transform .2s cubic-bezier(.4, 0, .2, 1);
              }`
            }
            </style>

            <div className={style.dir} id='dir'>
                <nav className={style['dir-cta']} id={style['dir-cta']}>
                    {children}
                </nav>
            </div>
        </>
    )
}