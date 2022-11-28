import style from "../styles/Home.module.css";
import React from "react";

export function Divider() {
    return (
        <section>
            <div className={style['app-container']}>
                <div className="divider"></div>
            </div>
        </section>
    )
}