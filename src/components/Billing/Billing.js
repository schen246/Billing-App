import { CssBaseline, Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import React, { useEffect, useState } from 'react';
import axios from "axios";

import {StyledTableCell, StyledTableRow, useStyles} from "./Constants";

export default function Billing(props) {
    const classes = useStyles();
    const [renderIdList, setRenderIdList] = useState('');
    const [loading, setLoading] = useState(false);

    function getBillingData(userId) {
        setLoading(true);
        axios.post(`http://localhost:8000/getBillingData/`)
        .then((response) => {
            processData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);    
            setLoading(false);
        });
    }

    function processData(rows) {
        let list = [];
        if (rows !== undefined && rows.length > 0) {
            list = rows.map((row, index) => {
                return {srNo: index + 1, transactionID: row.transactionID, date: row.date, status: row.status, amountPaid: row.amountPaid, reports: "Download"}
            });
        }
        setRenderIdList(list);
    }

    useEffect(() => {
        getBillingData(props.login.userId);
    });

    return (
        <React.Fragment>
        <CssBaseline/>
        <main className={classes.mainMargin}>
        <label style={{fontSize: "2rem"}}>Billing Status</label>
            <form className={classes.form}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr. No.</StyledTableCell>
                                <StyledTableCell align="center">Transaction ID</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                                <StyledTableCell align="center">Amount Paid</StyledTableCell>
                                <StyledTableCell align="center">Reports</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading?<CircularProgress size={24} />:null}
                            {renderIdList !=undefined && renderIdList.length>0?
                            renderIdList.map((row) =>(   
                                <StyledTableRow key={row.srNo}>
                                    <StyledTableCell align="center" >{row.srNo}</StyledTableCell>
                                    <StyledTableCell align="center">{row.transactionID}</StyledTableCell>
                                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                                    <StyledTableCell align="center">{row.status}</StyledTableCell>
                                    <StyledTableCell align="center">{row.amountPaid}</StyledTableCell>
                                    <StyledTableCell align="center" >
                                        <Button variant="contained" color="primary" component="span" className={classes.download_button}
                                            >
                                            <GetAppIcon fontSize='small'></GetAppIcon>
                                            {row.reports}
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            )):
                                <StyledTableRow>
                                    <StyledTableCell align="center">No record</StyledTableCell>
                                    <StyledTableCell align="center">No record</StyledTableCell>
                                    <StyledTableCell align="center">No record</StyledTableCell>
                                    <StyledTableCell align="center">No record</StyledTableCell>
                                    <StyledTableCell align="center">No record</StyledTableCell>
                                    <StyledTableCell align="center">No record</StyledTableCell>
                                </StyledTableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </main>
        </React.Fragment>
      );
}