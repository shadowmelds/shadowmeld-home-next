'use client';
import style from "../styles/NavDrawer.module.css";
import {switchTheme} from "../data/utils";
import {useState} from "react";

export function SwitchThemeButton() {

    let [theme, setTheme] = useState('深色')
    const switchThemeText = () => {
        if (typeof document !== 'undefined') {
            var mode = document.cookie.split(";")[0].split("=")[1];
            if (mode != undefined) {
                setTheme(mode === '1' ?'浅色':'深色')
            }
        }
    }

    return (
        <div className={style['theme-switcher']} onClick={() => {
            switchTheme()
            switchThemeText()
        }}>
            <img className="dark-mode" src="/icons/dark_mode_black_24dp.svg" style={{width: '24px', height: '24px', padding: '4px'}}/>
            <img className="light-mode" src="/icons/light_mode_white_24dp.svg" style={{width: '24px', height: '24px', padding: '4px'}}/>
            <span>切换至{theme}模式</span>
        </div>
    )
}