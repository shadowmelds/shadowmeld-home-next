'use client';

export function ExpandNavigation() {
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

    return (
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

        </button>
    )
}