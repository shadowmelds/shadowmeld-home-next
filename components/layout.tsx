import {Header} from "./header";
import {Footer} from "./footer";
import {useEffect, useState} from "react";
import {NavDrawer} from "./nav-drawer";
import Dir from "./dir";
import {mainTabItem} from "../data/header-tab.data";
import {navigationItem} from "../data/navigation.data";
import {socialItem} from "../data/social.data";

export default function Layout({dir = null, children}) {

    return (
        <div id="__next">
            <NavDrawer mainTabs={mainTabItem}/>
            <div className="content-cta">
                <Header mainTabs={mainTabItem} />
                {dir != null &&
                    <>
                        <div className="content-cta">
                            <div className='dir-layout'>
                                {children}
                            </div>
                            <div className="sitemask"></div>
                        </div>
                    </>
                }
                {dir == null && children}
                <Footer navigations={navigationItem} socials={socialItem} />
            </div>

            {dir != null &&
                <Dir>
                    {dir}
                </Dir>
            }
        </div>
    )
}