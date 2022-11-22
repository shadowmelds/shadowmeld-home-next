import '../styles/globals.css'
import Layout from "../components/layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    if (typeof window !== "undefined") {

        init();
        // 当页面返回时加载 亮/暗色主题
        window.addEventListener('pageshow', function(event) {
            // 如果页面是读取缓存
            if (event.persisted) {
                init();
            }
        });
    }

    function init() {
        const mode = document.cookie.split(";")[0].split("=")[1];
        const html = document.querySelector('HTML')

        // 暗色模式
        if (mode === '1') {
            html.className = 'dark'
        } else {
            html.className = 'light'
        }
    }
    const getLayout = Component.getLayout || ((blog) => blog)
    return getLayout(<Component {...pageProps} />)
}
