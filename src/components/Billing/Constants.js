import { makeStyles, withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        maxHeight:10,
    },
    body: {
        fontSize: 13,
        padding:8
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export const useStyles = makeStyles((theme)=>({
    form:{
        paddingBottom:60,
        paddingTop:20
    },
    mainMargin:{
        paddingLeft:200,
        paddingRight:200,
    },
    table:{
        minWidth: 800,
    },
    TableRow:{
        height:'13px',
    },
    download_button:{
        color:'black',
        backgroundColor:'white',
        fontSize:'12px',
        border:'2px solid #f44336',
        borderRadius:'6px',
        padding:'3px 10px',
        "&:hover":{
            backgroundColor:'#f44336',
            color:'white'
        }
    }
}));