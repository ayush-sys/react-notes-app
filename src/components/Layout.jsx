import { AppBar, Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import { format } from 'date-fns';




// Custom CSS styles
const useStyles = makeStyles((theme) => {
    return{
        root: {
            display:'flex'
        },
        page: {
            background: '#f9f9f9',width:'100%',padding: theme.spacing(3)
        },
        drawer:{
            width: 240,
        },
        drawerPaper: {
            width: 240
        },
        active: {
            background: '#f5f5f5'
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar: {
            width: `calc(100% - ${240}px)`
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(3)
        }
    }
})


const Layout = (props) => {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create'
        }
    ]

    return ( 
        <div className={classes.root}>


            {/* appbar */}
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                        Date: {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Jarvis
                    </Typography>
                    <Avatar src='/arc-reactor.png' className={classes.avatar}/>
                </Toolbar>
            </AppBar>


            {/* sidebar */}
            <Drawer className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h4' className={classes.title}>
                        Keep Notes
                    </Typography>
                </div>


                {/* List Links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem key={item.text} button onClick={() => history.push(item.path)} 
                            className={location.pathname === item.path ? classes.active:null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>

            </Drawer>


            {/* {Pages Routes} */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                    {props.children}
            </div>
        </div>
     );
}


export default Layout;
