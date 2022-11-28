import style from "../../styles/Photo.module.css";
import React, {useLayoutEffect} from "react";
import {ImgX} from "./imgx";

export function ImgWrap({onLoading, photosData, onPreview}) {

    useLayoutEffect(() => {
        imageView().then(r => {
            onLoading(false)
        })
    }, [])

    return (
        <div id={style['img_wrap']}>
            {
                photosData.map((photo) => (
                    <ImgX key={photo.photoUrl} photo={photo} onClick={() => {
                        onPreview(photo)
                    }}/>
                ))
            }
        </div>
    )
}


async function imageView(): Promise<void> {
    const imgs = document.getElementById(style['img_wrap']).getElementsByClassName(style['img_x']);
    console.log(imgs.length);
    for (let i = 0; i < imgs.length; i++) {
        imgbox(imgs[i], imgs.length - i);
    }
}

function imgbox(obj, i): void {
    if (typeof document !== 'undefined') {
        let width = (document.getElementById(style['img_wrap']) as HTMLDivElement).clientWidth
        console.log('w' + width)
        const imgSrc = obj.querySelector('img').getAttribute('src')
        getImageWidth(imgSrc, (w, h) => {
            obj.querySelector('i').style.paddingBottom = `${h / w * 100}%`
            obj.style.flexGrow = `${(w * 100) / h}`
            // obj.style.flexBasis = `${(w * (width * 0.33)) / h}px`
        });
    }
}

function getImageWidth(url, callback): void {
    const img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = () => {
            callback(img.width, img.height);
        };
    }
}