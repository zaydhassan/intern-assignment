import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemButton, Checkbox, Collapse, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
    id: number;
    name: string;
    subDepartments: string[];
}

const departments: Department[] = [
    { id: 1, name: 'Department 1', subDepartments: ['Sub 1-1', 'Sub 1-2'] },
    { id: 2, name: 'Department 2', subDepartments: ['Sub 2-1', 'Sub 2-2'] },
];

const DepartmentList = () => {
    const [open, setOpen] = useState<{[key: number]: boolean}>({});
    const [checked, setChecked] = useState<number[]>([]);

    const handleClick = (id: number) => {
        setOpen(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleToggle = (value: number) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 720, m: 'auto', mt: 5 }}>
            <Typography variant="h6" sx={{ ml: 2, my: 2 }}>
                Departments
            </Typography>
            {departments.map((dept) => (
                <React.Fragment key={dept.id}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleClick(dept.id)} sx={{ borderRadius: 1, boxShadow: 1, my: 1 }}>
                            {open[dept.id] ? <ExpandLess /> : <ExpandMore />}
                            <ListItemText primary={dept.name} />
                            <Checkbox
                                edge="end"
                                onChange={() => handleToggle(dept.id)}
                                checked={checked.includes(dept.id)}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open[dept.id]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {dept.subDepartments.map((sub, index) => {
                                const subId = dept.id * 100 + index;
                                return (
                                    <ListItemButton key={subId} sx={{ pl: 4 }}>
                                        <ListItemText primary={sub} />
                                        <Checkbox
                                            edge="end"
                                            onChange={() => handleToggle(subId)}
                                            checked={checked.includes(subId)}
                                        />
                                    </ListItemButton>
                                );
                            })}
                        </List>
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
};

export default DepartmentList;
