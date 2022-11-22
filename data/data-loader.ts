import {loadJson, styleMethod02} from "./utils";
import {SkillData} from "./skill.data";
import {ASSETS_URL} from "./config";
import {HeaderTabData, mainTabItem} from "./header-tab.data";
import {NavigationData, navigationItem} from "./navigation.data";

export function getSkillsData(callback) {
    let skillList: SkillData[] = [];
    loadJson(`${ASSETS_URL}/json/skills.json`, request => {
        if (request != null) {
            const skills = JSON.parse(request);
            for (let skill of skills['skills']) {
                skillList[skill.id] = {
                    id: skill.id,
                    title: skill.title,
                    icon: skills['baseUrl'] + skill.icon,
                    primary: skill.primary,
                    iconColor: skill.iconColor,
                    rating: skill.rating,
                    titleColor: styleMethod02(skill.primary)
                }
            }
        }
        callback(skillList)
    })
}

export async function getSkills() {
    let skillList: SkillData[] = [];
    const request = await fetch(`${ASSETS_URL}/json/skills.json`);
    const skills = await request.json()
    for (let skill of skills['skills']) {
        skillList[skill.id] = {
            id: skill.id,
            title: skill.title,
            icon: skills['baseUrl'] + skill.icon,
            primary: skill.primary,
            iconColor: skill.iconColor,
            rating: skill.rating,
            titleColor: styleMethod02(skill.primary)
        }
    }
    return skillList
}

export async function getSocials() {
    const request = await fetch(`${ASSETS_URL}/json/socials.json`);
    const socials = await request.json()
    return socials['socials']
}

export async function getProjects() {
    const request = await fetch(`${ASSETS_URL}/json/projects.json`);
    const projects = await request.json()
    return projects['projects']
}

export async function getPhotos() {
    const request = await fetch(`${ASSETS_URL}/json/photos.json`);
    const photos = await request.json()
    return photos['photos']
}

export function getMainTabs(): HeaderTabData[] {
    return mainTabItem
}

export function getNavigations(): NavigationData[] {
    return navigationItem;
}

export async function getMarkdowns() {
    const request = await fetch(`${ASSETS_URL}/json/markdowns.json`);
    return await request.json()
}

export function getMarkdownContent(url, callback) {
    let xmlhttp: XMLHttpRequest;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        console.log('浏览器不支持');
    }
    if (xmlhttp != null) {
        xmlhttp.open('get', url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback(xmlhttp.responseText)
            }
        };
    }
}
