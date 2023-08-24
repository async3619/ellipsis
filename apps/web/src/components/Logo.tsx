import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export interface LogoProps extends SvgIconProps {}

export function Logo(props: LogoProps) {
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
            <g>
                <path
                    d="M18.669,30.092c0-2.391,1.607-4.385,3.793-5.021H7.571c-.365,0-.719-.042-1.062-.115-2.29,.489-4.009,2.52-4.009,4.956,0,2.801,2.27,5.071,5.071,5.071h15.988c-2.701,0-4.891-2.19-4.891-4.891Z"
                    fill="#ffc33a"
                />
                <path
                    d="M23.031,26.901c-1.566,.359-2.68,1.904-2.347,3.638,.283,1.473,1.658,2.487,3.158,2.487h13.658v-6.203h-13.773c-.239,0-.472,.027-.696,.078Z"
                    fill="#e5e8eb"
                />
                <path
                    d="M23.559,25.071h-1.097c-2.186,.635-3.793,2.63-3.793,5.021,0,2.701,2.19,4.891,4.891,4.891h11.984c1.08,0,1.956-.876,1.956-1.956h-13.658c-1.5,0-2.875-1.014-3.158-2.487-.333-1.734,.781-3.279,2.347-3.638,.224-.051,.457-.078,.696-.078h13.773c0-.865-.557-1.592-1.329-1.863-.198,.067-.406,.112-.627,.112h-11.984Z"
                    fill="#ffa300"
                />
                <path
                    d="M22.462,25.071h1.097c-2.701,0-4.891-2.19-4.891-4.891,0-2.391,1.607-4.385,3.793-5.021H7.571c-.365,0-.719-.042-1.062-.115-2.29,.489-4.009,2.52-4.009,4.956s1.719,4.467,4.009,4.956c.343,.073,.697,.115,1.062,.115h14.891Z"
                    fill="#3182f6"
                />
                <path
                    d="M23.031,16.99c-1.566,.359-2.68,1.903-2.347,3.638,.283,1.473,1.658,2.487,3.158,2.487h13.658v-6.203h-13.773c-.239,0-.472,.027-.696,.078Z"
                    fill="#e5e8eb"
                />
                <path
                    d="M23.559,15.16h-1.097c-2.186,.635-3.793,2.63-3.793,5.021,0,2.701,2.19,4.891,4.891,4.891h11.984c.221,0,.429-.045,.627-.112,.771-.262,1.329-.984,1.329-1.844h-13.658c-1.5,0-2.875-1.014-3.158-2.487-.333-1.735,.781-3.279,2.347-3.638,.224-.051,.457-.078,.696-.078h13.773c0-.865-.557-1.593-1.329-1.863-.198,.067-.406,.112-.627,.112h-11.984Z"
                    fill="#1e6ef4"
                />
                <path
                    d="M22.462,15.16h1.097c-2.701,0-4.891-2.19-4.891-4.891,0-2.777,2.162-5.026,4.891-5.215v-.036H7.571c-2.801,0-5.071,2.27-5.071,5.071h0c0,2.436,1.719,4.467,4.009,4.956,.343,.073,.697,.115,1.062,.115h14.891Z"
                    fill="#23b169"
                />
                <path
                    d="M23.031,7.078c-.895,.205-1.642,.797-2.056,1.591-.023,.044-.034,.095-.054,.14-.167,.362-.278,.757-.293,1.178-.001,.037,.009,.077,.009,.114,0,.202,.008,.406,.048,.615,.283,1.473,1.658,2.487,3.158,2.487h13.658V7h-13.773c-.239,0-.472,.027-.696,.078Z"
                    fill="#e5e8eb"
                />
                <path
                    d="M37.5,13.204h-13.658c-1.5,0-2.875-1.014-3.158-2.487-.04-.209-.048-.413-.048-.615,0-.037-.01-.077-.009-.114,.015-.422,.126-.816,.293-1.178,.021-.045,.031-.096,.054-.14,.414-.794,1.161-1.386,2.056-1.591,.224-.051,.457-.078,.696-.078h13.773c0-1.095-.887-1.982-1.982-1.982h-11.597c-.124,0-.239,.028-.361,.036-2.729,.189-4.891,2.438-4.891,5.215,0,2.701,2.19,4.891,4.891,4.891h11.984c.221,0,.429-.045,.627-.112,.771-.262,1.329-.984,1.329-1.844Z"
                    fill="#03905a"
                />
            </g>
            <rect width="40" height="40" fill="none" />
        </SvgIcon>
    );
}
