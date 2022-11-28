'use client';

import React, {useEffect, useState} from "react";
import style from "../styles/Home.module.css";
import {Features} from "./features";
import {Skills} from "./skills";
import {Projects} from "./projects";

export function Responsive({skillsData, projectData}) {

    const [component, setComponent] = useState();
    let selectedSkill = skillsData[0]

    const Normal = () => {

        const onChange = (value) => {
            console.log(`${value.title}`)
            selectedSkill = value
        };


        return(
            <>
                <div className={style.normal}>
                    <Features/>
                    <Skills skillsData={skillsData} onChange={onChange} selectedSkill={selectedSkill}/>
                    <Projects projectsData={projectData}/>
                </div>
                <div className={style.desktop}>
                </div>
            </>
        )
    }


    const Desktop = () => {

        // 监听子组件值的改变，从而改变value值
        const onChange = (value) => {
            console.log(`${value.title}`)
            selectedSkill = value
        };

        return(
            <>
                <div className={style.normal}>
                    <Features/>
                    <Projects projectsData={projectData}/>
                </div>
                <div className={style.desktop}>
                    <Skills skillsData={skillsData} onChange={onChange} selectedSkill={selectedSkill}/>
                </div>
            </>
        )
    }

    const layoutPages = (x) => {
        if (x) {
            console.log(`desktop`)
            // @ts-ignore
            setComponent(Desktop)
        } else {
            console.log(`normal`)
            // @ts-ignore
            setComponent(Normal)
        }
    }

    const updateDimensions = () => {
        let mediaQuery = window.matchMedia('(min-width: 1200px)')
        layoutPages(mediaQuery.matches)
        mediaQuery.addEventListener('change', event => {
            layoutPages(event.matches)
        })
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            updateDimensions()
        }
    }, []);

    return (
        <div className={style.columns} id={style.columns}>
            {component}
        </div>
    )
}