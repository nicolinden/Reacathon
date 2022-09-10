import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VideocamIcon from '@mui/icons-material/Videocam';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import { Button, Group, IconButton, InfoSignIcon, majorScale, Pane, SegmentedControl } from 'evergreen-ui';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TabBar = () => {
    const [selected, setSelected] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const navigation = [
            {
                key: 0,
                nav: 'info',
            }, {
                key: 1,
                nav: 'ships',
            }, {
                key: 2,
                nav: 'crew',
            }, {
                key: 3,
                nav: 'media',
            },
        ];

        const nav = navigation.find((item) => item.key === selected);
        navigate(nav?.nav ?? "info");
    }, [navigate, selected]);

    return (
        <Pane position="fixed" bottom="0" width="100%" background="gray50">
            <BottomNavigation
                value={selected}
                onChange={(value, newValue) => {
                    setSelected(newValue);
                }}
            >
            <BottomNavigationAction label="Overview" icon={<InfoIcon />} />
            <BottomNavigationAction label="Ships" icon={<DirectionsBoatIcon />} />
            <BottomNavigationAction label="Crew" icon={<ContactMailIcon />} />
            <BottomNavigationAction label="Media" icon={<VideocamIcon />} />
            </BottomNavigation>
        </Pane>
    );

};
