import '../styles/globals.css'
import {LoadTheme} from "./load-theme";
import {cookies} from "next/headers";
import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {

    const nextCookies = cookies();

    const mode = nextCookies.get('DarkMode')
    let theme = 'none'
    if (mode != undefined) {
        theme = mode.value === '1' ?'dark':'light'
    }

    return (
        <html lang="en" className={theme}>
            <body>{children}</body>
            <LoadTheme />
        </html>
    )
}
