import { makeStyles } from '@material-ui/core';
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    root: {
        display:'flex'
    },
    page: {
        background: '#f9f9f9',width:'100%'
    },
    drawer:{
        width: 240,
    },
    drawerPaper: {
        width: 240
    }
})

const Layout = (props) => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            {/* appbar */}
            {/* sidebar */}
            <Drawer className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h4'>
                        Goof Notes
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {props.children}
            </div>
        </div>
     );
}
 
export default Layout;

