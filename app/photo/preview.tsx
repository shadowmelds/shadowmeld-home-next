import style from "../../styles/Photo.module.css";
import React from "react";

export function Preview({previewPhoto, onPreview}) {

    if (previewPhoto == null) {
        return null
    } else {
        return (

            <div className={`${style['dialog-mask']} ${style['is-display']}`} id={style['dialog-mask']} onClick={() => {
                onPreview(null)
            }}>

                <div className={style['photo-preview-linear']}>
                    <div className={style['photo-preview-cta']}>

                        <img className={style['photo-preview']} id={style['photo-preview']} src={`/photos/${previewPhoto.photoUrl}`} alt={previewPhoto.description}/>

                        <div className={style['photo-text']}>

                            <p className={style['photo-description']} id={style['photo-description']}>
                                {previewPhoto.description}
                            </p>
                            <p className={style['photo-date']} id={style['photo-date']}>
                                {`拍摄日期：${previewPhoto.date}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}