export interface NavigationData {
    name: string,
    href: string
}

export const navigationItem: NavigationData[] = [
    {
        name: "关于",
        href: "/blog/shadowmeld_info"
    },
    // {
    //     name: "留言",
    //     href: "comment"
    // },
    {
        name: "博客",
        href: "/blog"
    },
    {
        name: "照片",
        href: "/photo"
    },
    {
        name: "组件",
        href: "/component"
    },
    {
        name: "实验室",
        href: "/labs"
    },
]