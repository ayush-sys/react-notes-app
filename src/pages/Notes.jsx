import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Card from '../components/Card'
import Masonry from 'react-masonry-css'


const Notes = () => {

  const [notes,setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])


  // Delete a particular task
  const handleDelete = async(id) => {
    await fetch('http://localhost:3004/notes/'+id,{
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (  
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        {notes.map(note => (
          <div item key={note.id} xs={12} md={6} lg={4}>
            <Card note={note} handleDelete={handleDelete}/>
          </div>        
        ))}

      </Masonry>
    </Container>
  );
}


export default Notes; 
