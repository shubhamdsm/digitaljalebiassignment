import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

import { Link, TextField } from '@material-ui/core';

const Login = (props) =>{
    const{email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
    return(
        <section className='formcss'>
        <div>
            <TextField 
             variant='outlined'
             margin='normal'
             
             type='text'
             autoFocus
             required 
             label='Email Address'
             value ={email}
              placeholder ='Email Address*' 
              onChange={(e)=> setEmail(e.target.value)} />
              <p>{emailError}</p>
             <TextField
               type ='password' 
              required
              
               value ={password}
              variant='outlined'
              margin='normal'
              label='Password'
              
              placeholder='Password*'
              onChange ={(e)=> setPassword(e.target.value) }/>
              <p>{passwordError}</p>
              <div>
                  {hasAccount ? (
                      <>
                        <Button
                         onClick ={handleLogin}
                         
                         variant='contained'
                         color='primary'
                         >
                         Sign in
                         </Button>
                        <p>Don't have an account?
                        <Link href='#' onClick = {() => setHasAccount(!hasAccount)}>Sign up</Link>
                        </p>
                      </>
                  ):(
                    <>
                      <Button
                       onClick ={handleSignUp}
                       
                       variant='contained'
                       color='primary'
                       >
                       Sign up
                       </Button>
                      <p>Have an account?
                      <Link href='#'  onClick = {() => setHasAccount(!hasAccount)}>Sign in </Link>
                      </p>

                      </>
                  )}
              </div>
             </div>
        </section>
    )
}
export default Login