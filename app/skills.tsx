import React, {useEffect, useRef, useState} from "react";
import style from "../styles/Home.module.css";
import {hexToRGBA} from "../data/utils";
import {SVGInject} from "../components/svg-inject";

export function Skills({skillsData: skillsData, onChange: onChange, selectedSkill: selectedSkill}) {

    const [mySkill, setMySkill] = useState(selectedSkill)

    return (

        <section className={style.skills}>

            <div className={style['app-container']}>

                <h2 className='section-h2'>Skills</h2>

                <div className={style['skills-cta']} id={style['skills-cta']}>

                    {skillsData.map((skill) => (
                        <SkillChip key={skill.id} skill={skill} onClick={() => {
                            console.log(skill.title)
                            onChange(skill)
                            setMySkill(skill)
                        }}></SkillChip>
                    ))}
                </div>

                <SkillBar skill={mySkill}></SkillBar>
            </div>
        </section>
    )
}

export function SkillBar({skill}) {

    const ref = useRef(null);

    console.log(`需要进度为：${skill.rating}`)
    useEffect(() => {
        console.log(`需要进度为2：${skill.rating}`)
        const el2 = ref.current;
        setupAnimator(skill, el2)
    })

    return (
        <div className={style['skills-bar-cta']} id={style['skills-bar-cta']} style={{ backgroundColor: skill.primary}} >

            <img id={style['skill-logo']} src={`${skill.icon}`} alt="技能" width="20"
                 height="20"/>
            <span className={style.text} id="skills-bar-text" style={{color: skill.titleColor}}>{skill.title}</span>

            <div id={style['out-progress']}>
                <div id={style['in-progress']} ref={ref}>
                </div>
            </div>

        </div>
    )
}


export function SkillChip({skill, onClick}) {

    const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

    useEffect(() => {
        setIsMounted(true);
    },[]);

    return (
        <>
            <style jsx>{`

              .${style.skill}.skill-${skill.id} {
                background-color: transparent;
              }

              .${style.skill}.skill-${skill.id} {
                border: 1px solid #707070;
              }

              .${style.skill}.skill-${skill.id}:focus, ${style.skill}.skill-${skill.id}.is-focused {
                border-color: ${skill.primary};
              }

              .${style.skill}.skill-${skill.id}:focus .img-icon path, ${style.skill}.skill-${skill.id}.is-focused .img-icon path{
                fill: white;
                fill-opacity: 1;
              }
              
              .${style.skill}.skill-${skill.id}:focus:not(:active), ${style.skill}.skill-${skill.id}.is-focused:not(:active) {
                box-shadow: 0 0.5em 1em -0.125em ${hexToRGBA('#000000', 0.2)}, 0 0px 0 0.125em ${skill.iconColor};
                border-color: ${skill.primary};
                background-color: ${skill.primary};
                color: ${skill.titleColor};
              }
              
              .${style.skill}.skill-${skill.id}:hover, ${style.skill}.skill-${skill.id}.is-hovered {
                border-color: ${skill.primary};
              }

              .${style.skill}.skill-${skill.id}:active, ${style.skill}.skill-${skill.id}.is-active {
                border-color: ${skill.primary};
              }

              .${style.skill}.skill-${skill.id} .button-text {
                color: ${skill.titleColor};
              }
            `}

            </style>
            <style jsx global>{`
              .img-icon {
                height: 22px;
                width: 22px;
              }
              
              .img-icon path{
                fill: black;
                fill-opacity: 1;
              }
              
              .${style.skill}.skill-${skill.id}:focus:not(:active) .img-icon path, ${style.skill}.skill-${skill.id}.is-focused:not(:active) .img-icon path{
                fill: ${skill.titleColor};
                fill-opacity: 1;
              }
            `}</style>

            <button className={`button is-rounded ${style.button} ${style.skill} skill-${skill.id}`} onClick={onClick}>
                {/*{isMounted && <span className={style.icon} dangerouslySetInnerHTML={{__html: `<img class=\"img-icon\" src=${skill.icon} onload=\"SVGInject(this)\" alt=\"SkillData Icon\">`}}>*/}
                {/*</span>}*/}
                {/*<span className={style['button-text']}>{skill.title}</span>*/}

                {isMounted && <span className={style.icon}>
                    <SVGInject svgPath={skill.icon}/>
                </span>}
                <span className={style['button-text']}>{skill.title}</span>
            </button>

        </>
    )
}

let isAnimateId = -1;
let myRatingRecorder = 0;

function setupAnimator(skill, progressBar): void {

    progressBar.style.backgroundColor = hexToRGBA(skill.primary, 0.6);

    // if (!(isAnimateId === skill.id)) {
    isAnimateId = skill.id;
    const ratingRecorder = myRatingRecorder;
    myRatingRecorder = skill.rating;
    animate({
        timing: (timeFraction) => timeFraction,
        draw: (progress) => {
            progressBar.style.width = (ratingRecorder + (progress * (skill.rating - ratingRecorder))) + '%';
        },
        duration: 300
    });
    // }
}

function animate({timing, draw, duration}): void {
    const start = performance.now();
    requestAnimationFrame(function animate(time): void {
        // timeFraction 从 0 增加到 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) { timeFraction = 1; }
        // 计算当前动画状态
        const progress = timing(timeFraction);
        draw(progress); // 绘制
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
