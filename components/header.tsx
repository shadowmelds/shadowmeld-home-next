import Link from "next/link";
import {switchTheme} from "../data/utils";
import {ExpandNavigation} from "../app/expand-navigation";
import {SwitchTheme} from "../app/switch-theme";

export function Header({mainTabs}) {

    return (
        <header>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="mobile-menu-cta">
                        <li className="tab">
                            <ExpandNavigation />
                        </li>
                    </ul>
                    <Link className="navbar-title" href="/">
                        <img className="logo" src="/img/shadowmeld.png" alt="ShadowmeldIcon"/>
                            <span>这儿是影遁 🤪</span>
                        </Link>
                    <ul className="theme-mode">
                        <li className="tab">
                            <SwitchTheme />
                        </li>
                    </ul>
                    <ul className="tabs">
                        {mainTabs.map((tabItem) => (
                            <li key={tabItem.tabId} className="tab" id={tabItem.tabId}><a href={`/${tabItem.tabHref}`}>{tabItem.tabText}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}