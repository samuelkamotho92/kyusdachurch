import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
const useStyles = makeStyles((theme) => ({
    banner:{
        marginTop:"30px",
        marginBottom:"30px",
        textAlign:"center",
        backgroundColor: "rgba(102, 255, 0, 0.986)",
        padding:"20px",
    },
    upevent:{
        fontSize: "2.5rem",
        margin:"0",
        marginBottom: "10px",
        fontWeight: "700",
        color: "wheat",
    },
    title:{
        color: "black",
        fontFamily: "montserrat, Arial, sans-serif",
        fontWeight: "700",
    },
    btn:{
        backgroundColor:theme.palette.secondary.main,
        '&:hover':{
            backgroundColor:theme.palette.info.light,
       },
       padding:"10px",
       marginTop:"10px",
       fontSize:"18px",
       fontWeight:"700",
       textDecoration:"none",
       textTransform:"uppercase",
       color:"black"
    }
}));
const Upcoming = () => {
    const classes = useStyles();
    const query = useMediaQuery('(minWidth: 992px)')
const [event,setevent] = useState("Comunication Week");
    return ( 
        <div className="">
{/* <!--UPCOMING INVENT--> */}
<Grid container className={classes.banner}>
<Grid item xs={12} md={9} > 
<span className={classes.title}>UPCOMING EVENT</span>
<p className={classes.upevent}>{event}</p>
</Grid>
<Grid item xs={12} md={3} >
<Link className={classes.btn}
to={"/event"} role="button">PROGRAM →</Link>
</Grid>
</Grid>

{/* <!--end of upcoming event--> */}
        </div>

     );
}
 
export default Upcoming;