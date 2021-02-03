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
import { API_ROOT, TOKEN_KEY } from '../../constants';

export default function Billing(props) {
    const classes = useStyles();
    const [renderIdList, setRenderIdList] = useState('');
    const [loading, setLoading] = useState(false);
    const userId = localStorage.getItem(TOKEN_KEY);

    function getBillingData(userId) {
        setLoading(true);
        console.log(userId);
        axios.post(`${API_ROOT}/getbillingdata`, {
            user_id: userId
        })
        .then((response) => {
            console.log(response.data);
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
                return {srNo: index + 1, transactionID: row.transaction_id, date: row.date, status: row.status, amountPaid: row.amount, reports: "Download"}
            });
        }
        setRenderIdList(list);
    }

    useEffect(() => {
        getBillingData(userId);
    }, []);

    return (
        <React.Fragment>
        <CssBaseline/>
        <main className={classes.mainMargin}>
        <label style={{fontSize: "2rem"}}>Billing Reports</label>
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