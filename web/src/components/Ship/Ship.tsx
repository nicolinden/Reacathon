import React from 'react';
import { Pane,ChevronRightIcon,BanCircleIcon,TickCircleIcon } from 'evergreen-ui';
interface ShipProps{
    icon: string;
    name: string;
    location: string;
    type: string;
    success: boolean;
}
export const Ship = (props:ShipProps) => {

    const successIcon = props.success ?
    <TickCircleIcon size={30} color="success" marginTop={5} marginLeft={20} marginRight={10} />
     : <BanCircleIcon size={30} color="danger" marginTop={5} marginLeft={20} marginRight={10} />;

  return (
    <Pane className="launchWrapper">
        <img src={props.icon} alt={props.icon} width="50" height="50" className="launchItemPart"/>
        <div className="launchItemPart">
            <div className="textLaunchItem">{props.name}</div>
            <div className="dateLaunchItem">{props.location}</div>
            <div className="dateLaunchItem">{props.type}</div>
        </div>
        <div className="launchItemLastPart">
            <ChevronRightIcon size={40}/>
        </div>
        <div className="launchItemLastPart">{successIcon}</div>
    </Pane>
  );
};
