'use client';
import {useState} from "react";

export function SVGInject({svgPath, style = null}) {

    const [icon, setIcon] = useState("")

    loadSVGData(svgPath).then(text => {
        setIcon(text)
    })

    return (
        <div style={style} dangerouslySetInnerHTML={
            {__html: icon}
        }>
        </div>
    )
}

export async function loadSVGData(svgPath) {
    let svgFile = await fetch(svgPath)
    return await svgFile.text()
}
