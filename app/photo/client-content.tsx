"use client"
import React, {Suspense, useState} from "react";
import {ImgWrap} from "./img-wrap";
import {Preview} from "./preview";
import ProgressBarLoading from "./progress-bar-loading";

export function ClientContent({photosData}) {
    const [previewPhoto, setPreviewPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <div>
                <h2 className="section-h2">📸 相册</h2>
                <ProgressBarLoading isLoading={isLoading} />
                <ImgWrap onLoading={() => {setIsLoading(false)}} photosData={photosData} onPreview={(photo) => {setPreviewPhoto(photo)}} />
            </div>

            <Preview previewPhoto={previewPhoto} onPreview={(value) => {
                setPreviewPhoto(value)
            }}/>
        </>
    )
}