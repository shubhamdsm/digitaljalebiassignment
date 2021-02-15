import React,{useState} from 'react';
import Button from '@material-ui/core/Button'
import { ListItem,CardContent,Container,TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import firebase from './fire'

const Card = () => {
    const [cards, setCards] = useState([])
    const [input, setInput] = useState('')

 
   
   
  const handleClear = () =>{
      setInput('')
  }
  
    const addCards = (event) =>{
        event.preventDefault();
        setCards([...cards,input])
        setInput('')
    }
    const deleteCards = (event)=>{
        const {id} = event.target.parentElement
        cards.splice(id,1)
        setCards([...cards])
    }
    return(
        <Container style = {{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <h1>List of cards</h1>
            <form>
            <TextField
            label='Card' 
            value={input} 
            onChange={event => setInput(event.target.value)}
            >
            </TextField>
            <Button 
            disabled={!input}
            type='submit' 
            variant='contained'
            color ='primary'
            onClick={addCards}
            >
            ADD TODO
            </Button>
            <Button onClick ={handleClear}>CLEAR</Button>
            </form>
           
            <ol>
                {cards.map((card) =>(
                  <div>
                  <ListItem><li><CardContent>{card}</CardContent></li>  <DeleteIcon display='inline' cursor='pointer'  onClick={deleteCards}></DeleteIcon></ListItem>
                
                  </div>
                 
                  
                ))}
            </ol>
        </Container>
    )
}
export default Card