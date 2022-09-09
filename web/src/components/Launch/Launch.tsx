import React from 'react';
//import { Heading, majorScale, Pane } from 'evergreen-ui';

export const Launch = (props:any) => {
  return (
    <div className="launchWrapper">
        <img src={props.icon} alt={props.icon} width="30" height="30" className="launchItemPart"/>
        <div className="launchItemPart">
            <div>title: {props.title}</div>
            <div>date: {props.date}</div>
        </div>
        <div className="launchItemPart">success icon: {props.successIcon}</div>
        <div className="launchItemPart">arrow &gt;</div>
    </div>
    // <Pane
    //   height={majorScale(6)}
    //   background="green400"
    //   textAlign="center"
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Heading size={600}>Reacathon</Heading>
    // </Pane>
  );
};
