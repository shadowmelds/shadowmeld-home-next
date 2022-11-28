import style from "../../styles/Blog.module.css";

export function Tags({allTags, switchSelectTag}) {
    return (

        <div id={style['tags-cta']}>
            {
                allTags.map((tag) => (
                    <button
                        key={tag.index}
                        className={`button is-rounded ${style.button} ${style['shadowmeld-tag']} ${style['unselected']} shadowmeld-tag-${tag.index}`}
                        onClick={() => switchSelectTag(tag)}>
                        <span className={`${style.icon} icon material-icons`}>close</span><span
                        className="button-text">{`${tag.tagName} ${tag.tagCount}`}</span></button>
                ))
            }
        </div>

    )
}