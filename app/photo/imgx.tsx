import style from "../../styles/Photo.module.css";
import React from "react";

export function ImgX({photo, onClick}) {
    return (
        <div className={style['img_x']} onClick={onClick}>
            <i></i>
            <img src={`/photos/${photo.photoUrl}`} alt={"图片"}/>
        </div>
    )
}