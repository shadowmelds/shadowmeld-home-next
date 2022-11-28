import React, {useEffect, useState} from "react";
import {hideDir, scrollToAnchor, scrollToTop, switchDir} from "../../../data/utils";
import style from "../../../styles/Post.module.css";

export function PostDir({loadDir}) {


    const [h1, setH1] = useState(null)
    const [dirData, setDirData] = useState(null)

    const initDir = () => {

        let mdCta = document.querySelector('.md-content') as HTMLDivElement;
        let h23s = mdCta.querySelectorAll("h1, h2, h3, h4");

        let lastH2 = null;
        let lastH3 = null;

        let myDirData = []

        for (let i = 0; i < h23s.length; i++) {
            let heading = h23s[i] as HTMLHeadingElement;
            heading.id = `anchor-${i}`;

            if (heading.nodeName === "H1") {
                setH1({title: heading.innerText, url: `anchor-${i}`})
            }

            if (heading.nodeName === "H2") {
                lastH2 = {h2: {title: heading.innerText, url: `anchor-${i}`, child: []}}
                lastH3 = null
                myDirData.push(lastH2)
            }

            if (heading.nodeName === "H3") {

                lastH3 = {h3: {title: heading.innerText, url: `anchor-${i}`, child: []}}

                if (lastH2 != null) {
                    lastH2.h2.child.push(lastH3)
                } else {
                    myDirData.push(lastH3)
                }
            }

            if (heading.nodeName === "H4") {
                const dirItem = {h4: {title: heading.innerText, url: `anchor-${i}`}}
                if (lastH3 != null) {
                    lastH3.h3.child.push(dirItem)
                } else if (lastH2 != null) {
                    lastH2.h2.child.push(dirItem)
                } else {
                    myDirData.push(dirItem)
                }
            }
        }

        if (myDirData.length > 0) {
            setDirData(myDirData)
        }
    }

    useEffect(() => {
        if (loadDir == true && dirData == null) {
            if (typeof document !== 'undefined') {
                initDir()
                switchDir()
                scrollToTop()
            }
        }
    })

    return (
        <div className={style['blog-dir']}>
            <a className={`${style['dir-main-h1']} scroll`} onClick={()=> {
                scrollToAnchor(`${h1.url}`)
                hideDir()
            }}>{h1 != null && h1.title}</a>
            <div className={`divider ${style.divider}`}></div>

            {dirData &&
                <ul>
                    {
                        dirData.map((dirItem) => (

                            <div key={JSON.stringify(dirItem)} >
                                {
                                    Object.keys(dirItem)[0] === 'h2' &&
                                    <li className='dir-parent'>
                                        <a className={`${style['dir-toggle']} scroll`}
                                           onClick={()=> {
                                               scrollToAnchor(`${dirItem.h2.url}`)
                                               hideDir()
                                           }}>
                                            <span>{dirItem.h2.title}</span>
                                        </a>

                                        <ul className="dir-list">

                                            {
                                                dirItem.h2.child.map((dirItemH34) => (

                                                    <div key={JSON.stringify(dirItemH34)}>
                                                        {Object.keys(dirItemH34)[0] === 'h3' &&

                                                            <li className={style['dir-item']}>

                                                                <a className={`${style['dir-link']} scroll`} onClick={()=> {
                                                                    scrollToAnchor(`${dirItemH34.h3.url}`)
                                                                    hideDir()
                                                                }}>{dirItemH34.h3.title}</a>

                                                                <ul className="dir-list">
                                                                    {
                                                                        dirItemH34.h3.child.map((DirItemH4) => (
                                                                            <li key={DirItemH4.title} className={style['dir-item']}>
                                                                                <a className={`${style['dir-link']} ${style['dir-link-h4']} scroll`} onClick={()=> {
                                                                                    scrollToAnchor(`${DirItemH4.h4.url}`)
                                                                                    hideDir()
                                                                                }}>{DirItemH4.h4.title}</a>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                        }

                                                        {Object.keys(dirItemH34)[0] === 'h4' &&
                                                            <li className={style['dir-item']}>
                                                                <a className={`${style['dir-link']} ${style['dir-link-h4']} scroll`} onClick={()=> {
                                                                    scrollToAnchor(`${dirItemH34.h4.url}`)
                                                                    hideDir()
                                                                }}>{dirItemH34.h4.title}</a>
                                                            </li>
                                                        }

                                                    </div>

                                                ))
                                            }

                                        </ul>

                                    </li>

                                }

                                {

                                    Object.keys(dirItem)[0] == 'h3' &&
                                    <ul className="dir-list">
                                        <li className={style['dir-item']}>
                                            <a className={`${style['dir-link']} scroll`}
                                               onClick={()=> {
                                                   scrollToAnchor(`${dirItem.h3.url}`)
                                                   hideDir()
                                               }}>{dirItem.h3.title}</a>

                                            <ul className="dir-list">
                                                {
                                                    dirItem.h3.child.map((DirItemH4) => (
                                                        <li key={DirItemH4.title} className={style['dir-item']}>
                                                            <a className={`${style['dir-link']} ${style['dir-link-h4']} scroll`} onClick={()=> {
                                                                scrollToAnchor(`${DirItemH4.h4.url}`)
                                                                hideDir()
                                                            }}>{DirItemH4.h4.title}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                }

                            </div>

                        ))
                    }
                </ul>
            }
        </div>
    )
}