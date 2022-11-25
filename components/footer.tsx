import {useState} from "react";

export function Footer({navigations, socials}) {

    if (typeof document !== "undefined") {
        setupPathColor()
    }

    return (
        <footer className="footer app-footer">

            <div className="divider"></div>
            <div className="nav-cta">
                <div className="navigation-cta">
                    {navigations.map((navItem) => (
                        // eslint-disable-next-line react/jsx-key
                        <a key={navItem.name} className="navigation-link" href={navItem.href}>{navItem.name}</a>
                    ))}
                </div>
            </div>
            <div className="flex-horizontal">
                {socials.map((socialItem) =>
                    (
                        <div key={socialItem.name} className="social-logo-layout">
                            <a className="social-icon" target="_blank"
                               href={socialItem.url} rel="noreferrer" dangerouslySetInnerHTML={{__html: `<img class=\"social-logo\" src=/icons/${socialItem.icon} onload=\"SVGInject(this)\" alt=${socialItem.name}>`}}>
                            </a>
                        </div>
                    ))}

            </div>
            <div className="content has-text-centered">
                <p>友链 · <a href="https://lollipoppp.com/"
                           target="_blank" rel="noreferrer">Lollipop</a>
                </p>
            </div>
        </footer>
    )
}
/*
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
*/
function setupPathColor() {

    const style = document.createElement('style');
    document.head.appendChild(style);
    const sheet = style.sheet;
    sheet.insertRule('.social-logo:hover path{fill: white;}');
}