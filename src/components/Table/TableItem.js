import React, { useState } from "react";
import { IconButton, TableCell, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandableItem from "./ExpandableItem";

const TableItem = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ width: 50 }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row._id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.suburb ? row.suburb.length : 0}
                </TableCell>
            </TableRow>
            <ExpandableItem open={open} suburb={row.suburb} />
        </React.Fragment>
    )
}

export default TableItem;