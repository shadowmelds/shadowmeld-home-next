export function ProgressSpinner() {
    return (
        <>
            <style jsx>{`

.mat-progress-spinner[data-mode='indeterminate'] svg {
    animation: mat-progress-spinner-linear-rotate 2000ms linear infinite;
}
  
.mat-progress-spinner[data-mode='indeterminate'] circle {
    transition-property: stroke;
    animation-duration: 4000ms;
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-iteration-count: infinite;
}

.mat-progress-spinner {
  display: inline;
  
}

.mat-progress-spinner[data-mode='hidden'] {
  display: none;
}

.mat-progress-spinner svg {
    transform: rotate(-90deg);
    top: 0;
    left: 0;
    transform-origin: center;
    overflow: visible;
}

.mat-progress-spinner circle {
    fill: rgba(0,0,0,0);
    transition: stroke-dashoffset 225ms linear;
}
.mat-progress-spinner circle, .mat-spinner circle {
    stroke: #3f51b5;
}

@keyframes mat-progress-spinner-linear-rotate {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}

@keyframes mat-progress-spinner-stroke-rotate-100 {
    0% {
      stroke-dashoffset: 268.606171575px;
      transform: rotate(0);
    }
    12.5% {
      stroke-dashoffset: 56.5486677px;
      transform: rotate(0);
    }
    12.5001% {
      stroke-dashoffset: 56.5486677px;
      transform: rotateX(180deg) rotate(72.5deg);
    }
    25% {
      stroke-dashoffset: 268.606171575px;
      transform: rotateX(180deg) rotate(72.5deg);
    }
    25.0001% {
      stroke-dashoffset: 268.606171575px;
      transform: rotate(270deg);
    }
    37.5% {
      stroke-dashoffset: 56.5486677px;
      transform: rotate(270deg);
    }
    37.5001% {
      stroke-dashoffset: 56.5486677px;
      transform: rotateX(180deg) rotate(161.5deg);
    }
    50% {
      stroke-dashoffset: 268.606171575px;
      transform: rotateX(180deg) rotate(161.5deg);
    }
    50.0001% {
      stroke-dashoffset: 268.606171575px;
      transform: rotate(180deg);
    }
    62.5% {
      stroke-dashoffset: 56.5486677px;
      transform: rotate(180deg);
    }
    62.5001% {
      stroke-dashoffset: 56.5486677px;
      transform: rotateX(180deg) rotate(251.5deg);
    }
    75% {
      stroke-dashoffset: 268.606171575px;
      transform: rotateX(180deg) rotate(251.5deg);
    }
    75.0001% {
      stroke-dashoffset: 268.606171575px;
      transform: rotate(90deg);
    }
    87.5% {
      stroke-dashoffset: 56.5486677px;
      transform: rotate(90deg);
    }
    87.5001% {
      stroke-dashoffset: 56.5486677px;
      transform: rotateX(180deg) rotate(341.5deg);
    }
    100% {
      stroke-dashoffset: 268.606171575px;
      transform: rotateX(180deg) rotate(341.5deg);
    }
}
            `}</style>

            <div className="mat-progress-spinner mat-spinner mat-primary mat-progress-spinner-indeterminate-animation"
                 data-mode="indeterminate" style={{width: `100px`, height: `100px`}}>
                <svg preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true" viewBox="0 0 100 100"
                     style={{width: `100px`, height: `100px`}}>
                    <circle cx="50%" cy="50%" r="45" className="ng-star-inserted" style={{
                        animationName: `mat-progress-spinner-stroke-rotate-100`,
                        strokeDasharray: `282.743px`,
                        strokeWidth: `10%`,
                        transformOrigin: `50% 50%`
                    }}>
                    </circle>
                </svg>
            </div>
        </>
    )
}