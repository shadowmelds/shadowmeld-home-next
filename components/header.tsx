import Link from "next/link";

export function Header({mainTabs}) {
    const setupMenu = () => {
        if (typeof document !== 'undefined') {
            let tabs = document.querySelector('.tabs')
            let nav = document.querySelector('.mobile-menu')
            let navbar = document.querySelector('.navbar')
            // 添加 class="menu-btn" 到 nav
            if (nav.className.indexOf('menu-btn-exit') > -1) {
                tabs.classList.remove('menu-btn-exit');
                nav.classList.remove('menu-btn-exit');
                navbar.classList.remove('menu-btn-exit');
            } else {
                tabs.classList.add('menu-btn-exit');
                nav.classList.add('menu-btn-exit');
                navbar.classList.add('menu-btn-exit');
            }
        }
    }

    const switchTheme = () => {

        const html = document.querySelector('HTML');

        var Mode = document.cookie.split(";")[0].split("=")[1];
        var cookiesExp = new Date(new Date().setMonth(new Date().getMonth()+1));
        if (Mode == null || Mode == "undefined" || Mode == "") {
            if (html.classList.contains('dark')) {
                document.cookie = `DarkMode=0;path=/;expires=${cookiesExp.toUTCString()}`;
                html.className = 'light'
            } else {
                document.cookie = `DarkMode=1;path=/;expires=${cookiesExp.toUTCString()}`;
                html.className = 'dark'
            }
        } else if (Mode === '0') {
            document.cookie = `DarkMode=1;path=/;expires=${cookiesExp.toUTCString()}`;
            html.className = 'dark'
        } else {
            document.cookie = `DarkMode=0;path=/;expires=${cookiesExp.toUTCString()}`;
            html.className = 'light'
        }

    }

    return (
        <header>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="mobile-menu-cta">
                        <li className="tab">
                            <button className="action-icon css-16pk4gl mobile-menu"
                                    id="mobile-cta"
                                    name="Expand menu"
                                    title="展开导航栏"
                                    aria-label="展开导航栏"
                                    onClick={() => setupMenu()}>
                                <svg viewBox="0 0 24 24"
                                     role="presentation"
                                     style={{ width: '1.5rem', height: '1.5rem'}}>
                                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                                </svg>

                                <style jsx>{`

                                `}</style>
                            </button>
                        </li>
                    </ul>
                    <Link className="navbar-title" href="/">
                        <img className="logo" src="/img/shadowmeld.png" alt="ShadowmeldIcon"/>
                            <span>这儿是影遁 🤪</span>
                        </Link>
                    <ul className="theme-mode">
                        <li className="tab">
                            <button className="action-icon"
                                    id="switch-theme"
                                    name="Enable dark theme"
                                    title="启用深色主题"
                                    aria-label="启用深色主题"
                                    onClick={() => switchTheme()}>
                                <img id="light-mode" src="/icons/light_mode_white_24dp.svg"/>
                                <img id="dark-mode" src="/icons/dark_mode_black_24dp.svg"/>
                            </button>
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