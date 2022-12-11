'use client';
import {ProgressBar} from "../../components/progress-bar";
import {ProgressSpinner} from "../../components/progress-spinner";
import Layout from "../../components/layout";
import React, {useEffect, useState} from "react";
import {MaterialButton} from "../../components/material-button";
import {Snackbar} from "../../components/snackbar";
import {Dialog} from "../../components/dialog";
import style from "../../styles/Component.module.css";

export default function Component() {

    const [showDialog, setShowDialog] = useState(false)
    const [snackbar, setSnackbar] = useState(false)

    return (

        <Layout>
            <main>
                <section id="component-cta">
                    <div className="app-container">
                        <ProgressSpinner />
                        <ProgressBar />
                        <MaterialButton content='显示 Dialog' onClick={() => {
                            setShowDialog(true)
                        }} />
                        <MaterialButton content='显示 Snackbar' onClick={() => {
                            setSnackbar(true)
                        }} />
                    </div>
                </section>

                {showDialog && <Dialog onClose={() => {setShowDialog(false)}}>
                    <img className={style.img} src='/asset/project/img/shadowmeld-home-design.png'/>
                    <h2>Title</h2>
                    <p>Text</p>
                </Dialog>}

            </main>

            {snackbar && <Snackbar content={"这里是 Snackbar!"} timeout={3000} onClose={() => {setSnackbar(false)}}></Snackbar>}
        </Layout>
    )
}