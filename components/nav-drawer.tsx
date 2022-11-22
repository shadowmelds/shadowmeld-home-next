import Link from "next/link";
import style from "../styles/NavDrawer.module.css"

export function NavDrawer({mainTabs}) {
    return (
        <div className={style.navDrawer}>

            <button className={style.actionIcon}
                    name="Enable dark theme"
                    title="启用深色主题"
                    aria-label="启用深色主题">
                <img src="/icons/menu_open_black_24dp.svg"/>
            </button>
            <ul className={style.tabs}>
                <li className={style.tab}>
                    <Link className={style.tabCta} href="/">
                        <img className={style.logo} src="/img/shadowmeld.png" alt="ShadowmeldIcon"/>
                        <span>这儿是影遁 🤪</span>
                    </Link>
                </li>
                {mainTabs.map((tabItem) => (
                    <li key={tabItem.tabId} className={style.tab} id={tabItem.tabId}>
                        <a className={style.tabCta} href={`/${tabItem.tabHref}`}>
                            <img className={style.icon} src={`/icons/${tabItem.icon}`} alt="icon"/>
                            <span>{tabItem.tabText}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}