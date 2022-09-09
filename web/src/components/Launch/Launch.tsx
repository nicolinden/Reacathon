import React from 'react';
import { SiAccenture } from "react-icons/si";
import { VscCheck,VscChromeClose } from "react-icons/vsc";
interface LaunchProps{
    icon: string;
    title: string;
    date: string;
    success: boolean;
}
export const Launch = (props:LaunchProps) => {

    const successIcon = props.success ? <VscCheck/> : <VscChromeClose/>;

  return (
    <div className="launchWrapper">
        <img src={props.icon} alt={props.icon} width="30" height="30" className="launchItemPart"/>
        <div className="launchItemPart">
            <div>{props.title}</div>
            <div>{props.date}</div>
        </div>
        <div className="launchItemPart">{successIcon}</div>
        <div className="launchItemLastPart"><SiAccenture/></div>
    </div>
  );
};
