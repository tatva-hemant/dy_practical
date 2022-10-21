import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardHeader, CardContent } from '@mui/material';
import { CRIME_USERS } from '../../constants/api';
import APIService from '../../utils/APIService';
import TableItem from './TableItem';
import Search from './Search';

const CollapsibleTable = () => {
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useState({
    reported_date: "",
    offence_count: ""
  })
  const getParams = () => {
    let param = "?"
    Object.keys(searchParam).forEach(el => {
      if(searchParam[el]) param = `${param}${el}=${searchParam[el]}&`
    })
    return param
  }

  useEffect(() => {
    let isApiCall = true
    const getUsers = async () => {
      const fetchSearchData = getParams();
      const res = await APIService.get({ url: `${CRIME_USERS}${fetchSearchData}` });
      setList(res.data.data)
    }

    if (isApiCall) {
      getUsers();
    }

    return () => isApiCall = false
  }, [searchParam])

  const handleChange = e => {
    setSearchParam({
      ...searchParam,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Card>
        <CardHeader title="Crime Users" />
        <CardContent>
          <Search handleChange={handleChange} />
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Suburb - Incident</TableCell>
                  <TableCell>Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row) => (
                  <TableItem key={row._id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CollapsibleTable