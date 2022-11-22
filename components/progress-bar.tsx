export function ProgressBar({mode='indeterminate'}) {
    return (
        <>
            <style jsx>{`

.mat-progress-bar {
    display: block;
    height: 4px;
    overflow: hidden;
    position: relative;
    transition: opacity 250ms linear;
    width: 100%;
}

.mat-progress-bar[data-mode=hidden] {
    display: none;
}

.mat-progress-bar .mat-progress-bar-buffer {
    background-color: #cbd0e9;
}
.mat-progress-bar .mat-progress-bar-buffer {
    transform-origin: top left;
    transition: transform 250ms ease;
}
.mat-progress-bar-element, .mat-progress-bar-fill::after {
    height: 100%;
    position: absolute;
    width: 100%;
}

.mat-progress-bar[data-mode=indeterminate] .mat-progress-bar-primary, .mat-progress-bar[data-mode=query] .mat-progress-bar-primary {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;
    left: -145.166611%;
}
.mat-progress-bar[data-mode=indeterminate] .mat-progress-bar-fill, .mat-progress-bar[data-mode=query] .mat-progress-bar-fill {
    transition: none;
}
.mat-progress-bar .mat-progress-bar-fill {
    animation: none;
    transform-origin: top left;
    transition: transform 250ms ease;
}
.mat-progress-bar .mat-progress-bar-element, .mat-progress-bar-fill::after {
    height: 100%;
    position: absolute;
    width: 100%;
}
.mat-progress-bar [data-mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after, .mat-progress-bar[data-mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear;
}
.mat-progress-bar .mat-progress-bar-fill::after {
    animation: none;
    content: "";
    display: inline-block;
    left: 0;
}
.mat-progress-bar .mat-progress-bar-element, .mat-progress-bar-fill::after {
    height: 100%;
    position: absolute;
    width: 100%;
}
.mat-progress-bar .mat-progress-bar-fill:after {
    background-color: #3f51b5;
}
@keyframes mat-progress-bar-primary-indeterminate-translate {
    0% {
      transform: translateX(0);
    }
    20% {
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      transform: translateX(0);
    }
    59.15% {
      animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      transform: translateX(83.67142%);
    }
    100% {
      transform: translateX(200.611057%);
    }
}
@keyframes mat-progress-bar-primary-indeterminate-scale {
    0% {
      transform: scaleX(0.08);
    }
    36.65% {
      animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
      transform: scaleX(0.08);
    }
    69.15% {
      animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
      transform: scaleX(0.661479);
    }
    100% {
      transform: scaleX(0.08);
    }
}


.mat-progress-bar[data-mode=indeterminate] .mat-progress-bar-secondary, .mat-progress-bar[data-mode=query] .mat-progress-bar-secondary {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;
    left: -54.888891%;
    display: block;
}
.mat-progress-bar[data-mode=indeterminate] .mat-progress-bar-fill, .mat-progress-bar[data-mode=query] .mat-progress-bar-fill {
    transition: none;
}
.mat-progress-bar .mat-progress-bar-fill {
    animation: none;
    transform-origin: top left;
    transition: transform 250ms ease;
}
.mat-progress-bar .mat-progress-bar-element, .mat-progress-bar-fill::after {
    height: 100%;
    position: absolute;
    width: 100%;
}
.mat-progress-bar[data-mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after, .mat-progress-bar[data-mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear;
}
.mat-progress-bar .mat-progress-bar-fill::after {
    animation: none;
    content: "";
    display: inline-block;
    left: 0;
}
.mat-progress-bar .mat-progress-bar-element, .mat-progress-bar-fill::after {
    height: 100%;
    position: absolute;
    width: 100%;
}
.mat-progress-bar .mat-progress-bar-fill:after {
    background-color: #3f51b5;
}

@keyframes mat-progress-bar-secondary-indeterminate-translate {
    0% {
      animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
      transform: translateX(0);
    }
    25% {
      animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
      transform: translateX(37.651913%);
    }
    48.35% {
      animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
      transform: translateX(84.386165%);
    }
    100% {
      transform: translateX(160.277782%);
    }
}

@keyframes mat-progress-bar-secondary-indeterminate-scale {
    0% {
      animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
      transform: scaleX(0.08);
    }
    19.15% {
      animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
      transform: scaleX(0.457104);
    }
    44.15% {
      animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
      transform: scaleX(0.72796);
    }
    100% {
      transform: scaleX(0.08);
    }
}
            `}</style>

            <div className="mat-progress-bar mat-primary" data-mode={mode}>
                <div className="mat-progress-bar-buffer mat-progress-bar-element"></div>
                <div className="mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"></div>
                <div className="mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"></div>
            </div>
        </>
    )
}