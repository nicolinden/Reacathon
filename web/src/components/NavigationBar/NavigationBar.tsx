import { Button, Group, Tab, TabNavigation } from "evergreen-ui";
import * as React from "react";
import { IconContext } from "react-icons";
import { RiShipFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";
import { useParams } from "react-router";

export const NavigationBar=(launchId: any)=>{ return <div>

<TabNavigation className="iconBar" height="50px">
  {[{ name:'Launch',href:`/launch/${launchId}` }, { name:'Ships',href:`/ships/${launchId}` }].map((tab, index) => (
    <Tab key={tab.name} is="a" href={tab.href} id={tab.name} isSelected={index === 0}>
      <IconContext.Provider value={{ color:'black', size: '40px' }}>
      {tab.name === "Launch" ? <SiStarship /> : <RiShipFill />}
      </IconContext.Provider>
    </Tab>
  ))}
</TabNavigation>

</div>; };
