'use client';
import {switchTheme} from "../data/utils";

export function SwitchTheme() {
    return (
        <button className="action-icon"
                id="switch-theme"
                name="Enable dark theme"
                title="启用深色主题"
                aria-label="启用深色主题"
                onClick={() => switchTheme()}>
            <img id="light-mode" src="/icons/light_mode_white_24dp.svg"/>
            <img id="dark-mode" src="/icons/dark_mode_black_24dp.svg"/>
        </button>
    )
}