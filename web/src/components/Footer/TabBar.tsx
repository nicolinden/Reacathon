import { Button, Group, IconButton, InfoSignIcon, majorScale, Pane, SegmentedControl } from 'evergreen-ui';
import React from 'react';

export const TabBar = () => {
    const [options] = React.useState([
        { label: 'Hourly', value: 'hourly' },
        { label: 'Daily', value: 'daily' },
        { label: 'Monthly', value: 'monthly' },
    ]);

    const [value, setValue] = React.useState<any>('daily');

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
