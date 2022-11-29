"use client"
import Layout from "../../../components/layout";
import React, {useEffect, useState} from "react";
import {getMarkdownContent} from "../../../data/data-loader";
import style from "../../../styles/Post.module.css";
import {PostDir} from "./post-dir";

export function ClientContent({url}) {

    const [loadDir, setLoadDir] = useState(false)

    const initMarkdown = (url) => {

        const hljs = require('highlight.js');
        const md = require('markdown-it')({
            html: true,
            linkify: true,
            typographer: true,
            highlight: function (str, lang) {
                // 添加这两行才能正确显示 <>
                str = str.replace(/&lt;/g, "<");
                str = str.replace(/&gt;/g, ">");
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs"><code>' +
                            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                            '</code></pre>';
                    } catch (__) {}
                }
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
            }
        }).use(require('markdown-it-deflist'));

        addTargetBlank(md)

        getMarkdownContent(url, data => {
            // 以免之前有内容
            document.querySelector('.md-content').innerHTML = ""
            const result = md.render(data);
            document.querySelector('.md-content').insertAdjacentHTML('afterbegin', result);

            setLoadDir(true)
        })

    }

    const addTargetBlank = (md) => {

        var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };
        md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
            // If you are sure other plugins can't add `target` - drop check below
            var aIndex = tokens[idx].attrIndex('target');

            if (aIndex < 0) {
                tokens[idx].attrPush(['target', '_blank']); // add new attribute
            } else {
                tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
            }

            // pass token to default renderer.
            return defaultRender(tokens, idx, options, env, self);
        };
    }

    useEffect(() => {
        if (loadDir == false) {
            if (typeof document !== 'undefined') {
                initMarkdown(url)
            }
        }

    })

    return (

        <Layout dir={<PostDir loadDir={loadDir}/>}>
            <div className={style['blog-content']}>
                <main>
                    <section className={style.post}>

                        <div className={`app-container ${style['app-container']}`}>

                            <a title="返回博客列表" aria-label="back to blog posts list" className={style['back-posts-list']} href="../blog" target="_self">← 返回博客列表</a>
                            <div className={`md-content`} />
                        </div>

                    </section>
                </main>

                <div className="floating-button-cta">

                    <button className={`floating-action-button floating-button-menu ${style['floating-button-menu']}`} id='floating-button-menu'>
                        <span className="material-icons float-icon">menu</span>
                    </button>

                    <button className="floating-action-button" id="floating-button-top">
                        <span className="material-icons float-icon">expand_less</span>
                    </button>
                </div>

            </div>
        </Layout>
    )
}