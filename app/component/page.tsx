import Head from "next/head";
import {ProgressBar} from "../../components/progress-bar";
import {ProgressSpinner} from "../../components/progress-spinner";
import Layout from "../../components/layout";
import React from "react";

export default function Component() {
    return (

        <Layout>
            <main>
                <section id="component-cta">
                    <div className="app-container">
                        <ProgressSpinner />
                        <ProgressBar />
                    </div>
                </section>
            </main>
        </Layout>
    )
}