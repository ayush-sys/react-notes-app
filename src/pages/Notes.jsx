import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Card from '../components/Card'


const Notes = () => {

  const [notes,setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])

  const handleDelete = async(id) => {
    await fetch('http://localhost:3004/notes/'+id,{
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }


  return (  
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Card note={note} handleDelete={handleDelete}/>
          </Grid>        
        ))}
      </Grid>
    </Container>
  );
}


export default Notes; 
