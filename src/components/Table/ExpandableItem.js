import React from "react";
import { Collapse, Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import moment from "moment";
import { DATE_FORMAT } from '../../constants/common';

const ExpandableItem = (props) => {
    const { suburb, open } = props;

    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Suburb Incident
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Reported Date</TableCell>
                                    <TableCell>Postcode - Incident</TableCell>
                                    <TableCell>Offence count</TableCell>
                                    <TableCell>Offence Lavel 1</TableCell>
                                    <TableCell>Offence Lavel 2</TableCell>
                                    <TableCell>Offence Lavel 3</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {suburb.map((childItem) => (
                                    <TableRow key={childItem._id}>
                                        <TableCell component="th" scope="row">
                                            {moment(childItem.reportedDate).format(DATE_FORMAT)}
                                        </TableCell>
                                        <TableCell>{childItem.postcodeIncident}</TableCell>
                                        <TableCell>{childItem.offencecount}</TableCell>
                                        <TableCell>{childItem.offenceLevel1}</TableCell>
                                        <TableCell>{childItem.offenceLevel2}</TableCell>
                                        <TableCell>{childItem.offenceLevel3}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default ExpandableItem;