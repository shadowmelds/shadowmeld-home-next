import style from '../styles/Home.module.css'
import React, {useEffect, useRef, useState} from "react";

export function Projects({projectsData}) {

    const [listNormal, setListNormal] = useState([])
    const [listDesktop, setListDesktop] = useState([])

    const layoutProjects = (x) => {

        if (x) {
            let normal = []
            let desktop = []
            // 多行
            for (let i = 0; i　< projectsData.length; i++) {
                if (i % 2 == 0) {
                    normal.push(projectsData[i])
                } else {
                    desktop.push(projectsData[i])
                }
            }

            setListNormal(normal)
            setListDesktop(desktop)
        } else {
            // 单行
            setListDesktop([])
            setListNormal(projectsData)
        }
    }

    const updateDimensions = () => {
        let mediaQuery = window.matchMedia('(min-width: 768px)')
        layoutProjects(mediaQuery.matches)
        mediaQuery.addEventListener('change', event => {
            layoutProjects(event.matches)
        })
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            updateDimensions()
        }
    }, []);

    return (

        <section className={style.projects}>

            <div className={style['app-container']}>

                <h2 className='section-h2'>Projects</h2>

                <div className={style['project-cta']}>
                    <div className='columns' id='columns'>

                        <div className={`${style.list} column list-normal`} id='list-normal'>
                            {
                                listNormal.map((project) => (

                                    <div key={project.title} >
                                        {
                                            project.item == "dev" &&
                                            <DevChip project={project}/>
                                        }

                                        {
                                            project.item == "design" &&
                                            <DesignChip project={project}/>
                                        }
                                    </div>

                                ))
                            }
                        </div>

                        <div className={`${style.list} column list-desktop`} id='list-desktop'>
                            {
                                listDesktop.map((project) => (

                                    <div key={project.title} >
                                        {
                                            project.item == "dev" &&
                                            <DevChip project={project}/>
                                        }

                                        {
                                            project.item == "design" &&
                                            <DesignChip project={project}/>
                                        }
                                    </div>

                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export function DevChip({project}) {
    return (
        <a className={`${style['list-item']} project-link`} target="_blank"
           href={project.url} rel="noreferrer">
            <div className={`${style.item} ${style['dev-item']}`}>
                <img className={style['project-icon']}
                     alt="ProjectIcon"
                     src={`/asset/project/img/${project.icon}`}/>
                <div className={style['text-layout']}>
                    <h2 className='mat-h2'>{project.title}</h2>
                    <p className={style.description}>{project.content}</p>
                </div>
            </div>
        </a>
    )
}

export function DesignChip({project}) {
    return (
        <a className={`${style['list-item']} project-link`} target="_blank" rel="noreferrer">
            <div className={`${style.item} ${style['design-item']}`}>
                <img className={''}
                     alt="ProjectIcon"
                     src={`/asset/project/img/${project.img[0]}`}/>
                <h2 className={style.title}>{project.title}</h2>
                <p className={style.description}>{project.content}</p>
            </div>
        </a>
    )
}
