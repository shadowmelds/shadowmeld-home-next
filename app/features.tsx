import style from "../styles/Home.module.css";
import React from "react";

export function Features() {
    return (
        <section className={style.features}>
            <div className={style['app-container']}>
                <img className={style['info-logo']} src="/img/shadowmeld.png" alt="å¤´å"/>
                <h3 className={style.hello}><span className={style.about_wave__2bBrx}>ð</span> ä½ å¥½åï¼ææ¯å½±é ð¶âð«ï¸</h3>
                <a className={style.text}>
                    <p>ææ­£å¨åªåå­¦ä¹  CGå¨ç»åä½ ä»¥å åºç¨ç¨åºè®¾è®¡ï¼æåæ¬¢å®æåéåçµå­é³ä¹ï¼åæ¬¢ãå¤©ä½¿éä¸´å°æèº«è¾¹ï¼ã</p>
                </a>
            </div>
        </section>
    )
}
