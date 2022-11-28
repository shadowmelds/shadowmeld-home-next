import {SocialSvgIcon} from "../app/social-svg-icon";

export function Footer({navigations, socials}) {

    return (
        <footer className="footer app-footer">

            <div className="divider"></div>
            <div className="nav-cta">
                <div className="navigation-cta">
                    {navigations.map((navItem) => (
                        // eslint-disable-next-line react/jsx-key
                        <a key={navItem.name} className="navigation-link" href={navItem.href}>{navItem.name}</a>
                    ))}
                </div>
            </div>
            <div className="flex-horizontal">
                {socials.map((socialItem) =>
                    (
                        <SocialSvgIcon key={socialItem.name} socialItem={socialItem} />
                    ))}

            </div>
            <div className="content has-text-centered">
                <p>友链 · <a href="components/footer"
                           target="_blank" rel="noreferrer">Lollipop</a>
                </p>
            </div>
        </footer>
    )
}
