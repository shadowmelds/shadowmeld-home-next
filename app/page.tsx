import Layout from "../components/layout";
import React from "react";
import {Responsive} from "./responsive-cta";
import {getProjects, getSkills} from "../data/data-loader";

export default async function Page() {

    const data = await fetchData();

    return (
        <Layout>
            <main>
                <Responsive skillsData={data.skillsData} projectData={data.projectData}/>
            </main>
        </Layout>
    )
}

async function fetchData() {
    let skillData = await getSkills()
    let projectData = await getProjects()

    return {
        skillsData: skillData,
        projectData: projectData
    };
}