import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import {blue,green,red, orange,indigo} from '@material-ui/core/colors'


const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category === 'work'){
                return orange[500]
            }
            if(note.category === 'money'){
                return green[500]
            }
            if(note.category === 'todos'){
                return red[400]
            }
            if(note.category === 'notes'){
                return indigo[500]
            }
            return blue[500]
        }
    }
})


const NoteCard = (props) => {

    const classes = useStyles(props.note)

    return (  
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar}>
                            {props.note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action ={
                        <IconButton onClick={() => props.handleDelete(props.note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title = {props.note.title}
                    subheader = {props.note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {props.note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
 

export default NoteCard;
