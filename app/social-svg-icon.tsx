'use client';
import {useEffect, useState} from "react";
import {SVGInject} from "../components/svg-inject";

export function SocialSvgIcon({socialItem}) {

    if (typeof document !== "undefined") {
        setupPathColor()
    }

    return (
        <div key={socialItem.name} className="social-logo-layout">
            <a className="social-icon" target="_blank"
               href={socialItem.url} rel="noreferrer">
                <SVGInject svgPath={`/icons/${socialItem.icon}`} />
            </a>
        </div>
    )
}
function setupPathColor() {

    const style = document.createElement('style');
    document.head.appendChild(style);
    const sheet = style.sheet;
    sheet.insertRule('.social-logo:hover path{fill: white;}');
}