import {useState} from "react";

export function SVGInject({svgPath}) {

    const [icon, setIcon] = useState("")

    loadSVGData(svgPath).then(text => {
        setIcon(text)
    })

    return (
        <div dangerouslySetInnerHTML={
            {__html: icon}
        }>
        </div>
    )
}

export async function loadSVGData(svgPath) {
    let svgFile = await fetch(svgPath)
    return await svgFile.text()
}
