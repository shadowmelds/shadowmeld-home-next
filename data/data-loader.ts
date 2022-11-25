import {loadJson, styleMethod02} from "./utils";
import {baseSkillItem, SkillData} from "./skill.data";
import {HeaderTabData, mainTabItem} from "./header-tab.data";
import {NavigationData, navigationItem} from "./navigation.data";
import {socialItem} from "./social.data";
import {DEV_URL, Server_URL} from "./config";

export async function getSkills() {
    let skillList: SkillData[] = [];
    for (let skill of baseSkillItem) {
        skillList[skill.id] = {
            id: skill.id,
            title: skill.title,
            icon: `/icons/${skill.icon}`,
            primary: skill.primary,
            iconColor: skill.iconColor,
            rating: skill.rating,
            titleColor: styleMethod02(skill.primary)
        }
    }
    return skillList
}

export function getSocials() {
    return socialItem
}

export async function getProjects() {
    const request = await fetch(`${DEV_URL}/json/projects.json`);
    const projects = await request.json()
    return projects['projects']
}

export async function getPhotos() {
    const request = await fetch(`${DEV_URL}/json/photos.json`);
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
    const request = await fetch(`${DEV_URL}/json/markdowns.json`);
    return await request.json()
}

export async function getServerMarkdowns() {
    const request = await fetch(`${Server_URL}/json/markdowns.json`);
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
