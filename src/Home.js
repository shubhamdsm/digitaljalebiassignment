import React from 'react'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Cards from './Cards'
import './App.css';

const Home = ({handleLogout}) =>{
    return(
        <section>
            <AppBar position='static'>
            <Toolbar>
                <h1>Welcome </h1>
                <Button 
                onClick ={handleLogout}
                variant='contained'
                color='secondary'
                >Logout
                </Button>
            </Toolbar>    
            </AppBar>
            <Cards />
        </section>
    )
}
export default Home