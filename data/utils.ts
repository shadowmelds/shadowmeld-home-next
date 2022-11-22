// import jQuery from "./js/jquery-3.6.0.min";

import {useEffect} from "react";
import style from "../styles/Blog.module.css";

export function loadJson(url, request) {
    let xmlHttp: XMLHttpRequest;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        console.log('浏览器不支持');
    }

    if (xmlHttp != null) {
        xmlHttp.open('get',url, true)
        xmlHttp.send();
        xmlHttp.onload = () => {
            if (xmlHttp.status === 200) {
                request(xmlHttp.responseText)
            }
        }
    }
}


export function hexToRGBA(color, opacity): string {
    let sColor = color.toLowerCase();

    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }

        const sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16));
        }
        return 'rgba(' + sColorChange.join(',') + ',' + opacity + ')';
    }
    return sColor;
}


export function hexToRGB(color: string): string {
    let sColor = color.toLowerCase();

    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }

        const sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16));
        }
        return 'RGB(' + sColorChange.join(',') + ')';
    }
    return sColor;
}

// export function smoothScroll() {
//     jQuery(document).ready(function($) {
//         $(".scroll").click(function(event){
//             event.preventDefault();
//             $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
//         });
//     });
// }

export function setCurrentTab(currentId) {
    let tabComments = document.getElementById("tab-comment")
    let tabAbout = document.getElementById("tab-about")
    let tabBlog = document.getElementById("tab-blog")
    let tabPhoto = document.getElementById("tab-photo")

    tabComments.className = "tab"
    tabAbout.className = "tab"
    tabBlog.className = "tab"
    tabPhoto.className = "tab"

    let current = document.getElementById(currentId)
    current.className = "tab current"
}

export function scrollToTop() {
    let floatButtonTop = document.getElementById("floating-button-top")
    const scrollToTop = () => {
        let sTop = document.documentElement.scrollTop || document.body.scrollTop
        if (sTop > 0) {
            window.requestAnimationFrame(scrollToTop)
            window.scrollTo(0, sTop - sTop / 8)
        }
    }

    floatButtonTop.onclick = function () {
        scrollToTop()
    }
}


export function timestampFormat(timestamp): string {
    const date = new Date(timestamp);  // 参数需要毫秒数，所以这里将秒数乘于 1000
    let Y = date.getFullYear() + ' - '
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + ' - '
    let D = date.getDate() + ' '
    let h = date.getHours() + ':'
    let m = date.getMinutes() + ':'
    let s = date.getSeconds()
    return Y+M+D + ' at ' +h+m+s
}

export function getLocalGithubToken(): string {
    return localStorage.getItem("github-token")
}

/**
 * 解析文字在此背景颜色下的颜色
 * @param color
 */
export function styleMethod02(color): string {
    let rgb = hexToRGB(color);
    rgb = rgb.replace('RGB(', '');
    rgb = rgb.replace(')', '');
    const arr = rgb.split(',');

    return (parseInt(arr[0], 10) + parseInt(arr[1], 10) + parseInt(arr[2], 10)) / 3 > 128 ? hexToRGBA('#000000', 0.8) : hexToRGBA('#ffffff', 0.8);
}

export const switchDir = () => {
    if (typeof document !== 'undefined') {
        let floatButtonMenu = document.getElementById(style['floating-button-menu'])
        let dir = document.getElementById('dir')
        let body = document.getElementsByTagName("body")[0]
        let html = document.getElementsByTagName("html")[0]
        let sitemask = document.querySelector(".sitemask")
        floatButtonMenu.addEventListener('click', () => {
            dir.classList.add('visible')
            sitemask.classList.add('visible')
            body.classList.add('notscroll')
            html.classList.add('notscroll')
        })

        sitemask.addEventListener('click', () => {
            dir.classList.remove('visible')
            sitemask.classList.remove('visible')
            body.classList.remove('notscroll')
            html.classList.remove('notscroll')
        })
    }
}

export const scrollToAnchor = (anchorname:any) =>{
    if(anchorname){
        const anchorElement = document.getElementById(anchorname);
        if(anchorElement){
            anchorElement.scrollIntoView({behavior:'smooth',block:'start'});
        }
    }
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