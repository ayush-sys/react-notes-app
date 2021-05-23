import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import {FormControl, FormControlLabel, FormLabel, makeStyles} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  feild:{
    marginTop: 20,marginBottom: 20,display:'block'
  }
})



const Create = () => {

  const classes = useStyles()
  const history = useHistory()
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [titleError,setTitleError] = useState(false)
  const [detailsError,setDetailsError] = useState(false)
  const [category,setCategory] = useState('todos')


  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title == '')
      setTitleError(true)
    
    if(details == '')
      setDetailsError(true)

    if(title && details){
      fetch('http://localhost:3004/notes',{
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body:JSON.stringify({title,details,category})
      }).then(() => history.push('/'))
    }
  }
  

  return (
  <Container>
    <Typography variant='h5' component='h2' color='textSecondary' gutterBottom>
      Create a new note
    </Typography>

    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField id='outlined-basic' label='Note title'  className={classes.feild} 
      variant='outlined' color='secondary' 
      fullWidth required 
      onChange={(e) => setTitle(e.target.value)}
      error={titleError}
      />


      <TextField id='outlined-basic' label='Note Contents'  className={classes.feild} 
      variant='outlined' color='secondary' 
      fullWidth required multiline rows={4} 
      onChange={(e) => setDetails(e.target.value)}
      error={detailsError}
      />


      <FormControl className={classes.feild}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel control={<Radio />} label='Money' value='money' />
          <FormControlLabel control={<Radio />} label='To-do' value='todos'/>
          <FormControlLabel control={<Radio />} label='Reminders' value='reminders' />
          <FormControlLabel control={<Radio />} label='Work' value='work' />
        </RadioGroup>
      </FormControl>

      <Button type='submit' variant='contained' 
      color='secondary' endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>

    </form>

  </Container>);
}


export default Create;
