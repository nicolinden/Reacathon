import { Button, Group, IconButton, InfoSignIcon, majorScale, Pane, SegmentedControl } from 'evergreen-ui';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TabBar = () => {
    const [options] = React.useState([
        { label: 'Info', value: 'info' },
        { label: 'Ships', value: 'ships' },
        { label: 'Crew', value: 'crew' },
        { label: 'Media', value: 'media' },
    ]);

    const [value, setValue] = React.useState<any>('info');
    const navigate = useNavigate();

    useEffect(() => {
        navigate(value);
    }, [navigate, value]);

    return (
        <Pane position="fixed" bottom="0" width="100%" background="gray50">
            <SegmentedControl
                width={240} options={options} value={value} onChange={(value) => setValue(value)} minWidth="100%"
            />
        </Pane>
    );

};

{/*
<Group minWidth="100%" onSelect={selected}>
    <IconButton icon={InfoSignIcon}/>
    <IconButton icon={InfoSignIcon}/>
    <IconButton icon={InfoSignIcon}/>
</Group>
*/}
