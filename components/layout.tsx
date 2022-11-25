import {Header} from "./header";
import {Footer} from "./footer";
import {getMainTabs, getNavigations, getSocials} from "../data/data-loader";
import {useEffect, useState} from "react";
import {NavDrawer} from "./nav-drawer";
import Dir from "./dir";

export default function Layout({dir = null, children}) {

    const [mainTabsData, setMainTabsData] = useState([])
    useEffect(() => {
        setMainTabsData(getMainTabs())
    }, [])

    const [navigationData, setNavigationData] = useState([])
    useEffect(() => {
        setNavigationData(getNavigations())
    }, [])

    const [socialData, setSocialData] = useState([])

    useEffect(() => {
        setSocialData(getSocials())
    }, [])

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="text/javascript" src="/js/svg-inject.js"></script>
            <NavDrawer mainTabs={mainTabsData}/>
            <div className="content-cta">
                <Header mainTabs={mainTabsData} />
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
                <Footer navigations={navigationData} socials={socialData} />
            </div>

            {dir != null &&
                <Dir>
                    {dir}
                </Dir>
            }
        </>
    )
}