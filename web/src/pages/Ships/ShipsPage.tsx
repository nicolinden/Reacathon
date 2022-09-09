import { Pane } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { launches } from 'src/services/launches';
import { Ship } from 'src/components/Ship/Ship';
import { useParams } from 'react-router-dom';

export const ShipsPage: React.FC = () => {
  //Getting single Launch from SpaceX
  const [launchId, setLaunchId] = useState<any>(useParams().launchId);
  const [shipDetails, setShipDetails] = useState<any>([]);
  useEffect(() => {
    launches()
      .getShips(launchId)
      .then((data) => {
        console.log(data);
        setShipDetails(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <Pane className="tableWrapper">
      <main>
        {shipDetails.map((ship: any) => (
          <Ship
            key={ship.id}
            icon={ship.image}
            name={ship.name}
            location={ship.home_port}
            success={ship.success}
            type={ship.type}
          />
        ))}
      </main>
    </Pane>
  );
};
