import style from "../styles/Home.module.css";
import React from "react";

export function Features() {
    return (
        <section className={style.features}>
            <div className={style['app-container']}>
                <img className={style['info-logo']} src="/img/shadowmeld.png" alt="头像"/>
                <h3 className={style.hello}><span className={style.about_wave__2bBrx}>👋</span> 你好吖！我是影遁 😶‍🌫️</h3>
                <a className={style.text} href="/dashboard">
                    <p>我正在努力学习 CG动画创作 以及 应用程序设计，我喜欢守望先锋和电子音乐！喜欢《天使降临到我身边！》</p>
                </a>
            </div>
        </section>
    )
}
