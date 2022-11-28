import {getMarkdowns} from "../../data/data-loader";
import {ClientContent} from "./client-content";

export default async function Page() {
    const data = await getData()
    return (
        <ClientContent allMarkdowns={data.allMarkdowns} allYears={data.allYears} allTags={data.allTags}/>
    )
}

async function getData() {
    let markdowns = await getMarkdowns()
    let tagData = markdowns['tags']
    let fullTag = []
    let allCount = 0
    for (let index = 0; index < tagData.length; index++) {
        fullTag[index] = {
            index: index + 1,
            tagName: tagData[index],
            tagCount: 0
        }
    }
    for (let year of markdowns['years']) {
        if (markdowns['markdowns'][year].length > 0) {
            for (let md of markdowns['markdowns'][year]) {
                for (const mdTag of md.tags) {
                    fullTag[tagData.indexOf(mdTag)].tagCount += 1;
                }
                allCount += 1;
            }
        }
    }
    fullTag.unshift({
        index: 0,
        tagName: "全部",
        tagCount: allCount
    })

    return {
        allMarkdowns: markdowns['markdowns'],
        allTags: fullTag,
        allYears: markdowns['years']
    }
}