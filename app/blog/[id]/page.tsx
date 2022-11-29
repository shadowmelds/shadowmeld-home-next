import React from "react";
import {ClientContent} from "./client-content";

export default function Page({params}) {

    const url = `/asset/posts/${params.id}.md`

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/css/markdown-style.css"/>
            <ClientContent url={url} />
        </>
    )
}