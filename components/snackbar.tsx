'use client';
import style from "../styles/Snackbar.module.css";
import {useEffect} from "react";
export function Snackbar({content, timeout = 2000, onClose=null}) {

    useEffect(() => {
        setTimeout(function (){
            const snackBar = document.getElementById('snack-bar')
            if (snackBar != null) {
                // 1、删除动画的class
                snackBar.classList.remove(style.show);
                snackBar.ontransitionend = function () {
                }

                snackBar.classList.add(style.removing);
                snackBar.addEventListener('webkitAnimationEnd', () => {
                    snackBar.style.visibility = 'hidden';
                    onClose()
                })
            }
        }, timeout)
    },[])

    return (
        <div className={`${style['snack-bar']} ${style.show}`} id = 'snack-bar'>
            <div className={style['snack-bar-container']}>
                <span className={style['snack-bar-content']}>
                    {content}
                </span>
            </div>
        </div>
    )
}