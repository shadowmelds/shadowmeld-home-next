import {ProgressBar} from "../../components/progress-bar";
import React from "react";

export default function ProgressBarLoading({isLoading}) {
    return (
        <article className="progress-cta" style={{padding: `8px 0`}}>
            <ProgressBar mode={isLoading ? 'indeterminate' : 'hidden'}/>
        </article>
    )
}