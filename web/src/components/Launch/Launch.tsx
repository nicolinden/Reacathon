import React from 'react';
import { Pane,ChevronRightIcon,BanCircleIcon,TickCircleIcon } from 'evergreen-ui';
interface LaunchProps{
    icon: string;
    title: string;
    date: string;
    success: boolean;
}
export const Launch = (props:LaunchProps) => {

    const successIcon = props.success ?
    <TickCircleIcon size={40} color="success" marginLeft={16} marginRight={16} />
     : <BanCircleIcon size={40} color="danger" marginLeft={16} marginRight={16} />;

  return (
    <Pane className="launchWrapper">
        <img src={props.icon} alt={props.icon} width="70" height="70" className="launchItemPart"/>
        <div className="launchItemPart">
            <div>{props.title}</div>
            <div>{props.date}</div>
        </div>
        <div className="launchItemPart">{successIcon}</div>
        <div className="launchItemLastPart">
            <ChevronRightIcon size={40}/>
        </div>
    </Pane>
  );
};
