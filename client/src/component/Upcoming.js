import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    banner:{
        marginTop:"30px"
    }
})
const Upcoming = () => {
    const classes = useStyles();
const [event,setevent] = useState("Comunication Week");
    return ( 
        <div className={classes.banner}>
{/* <!--UPCOMING INVENT--> */}
<div className="highlight-bg has-margin-bottom" 
style={{backgroundColor: "chartreuse"}}>
<div className="container event-cta">
<div className="ec-txt"> <span>UPCOMING EVENT</span>
<p>{event}</p>
</div>
<Link className="btn btn-lg btn-primary" 
to={"/event"} role="button">Program details →</Link></div>
</div>
{/* <!--end of upcoming event--> */}
        </div>

     );
}
 
export default Upcoming;