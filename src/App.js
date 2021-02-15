/* eslint-disable default-case */
import React, {useState,useEffect} from 'react';
import fire from './fire'
import Login from './Login'
import Home from './Home'
import './App.css';

const App = () =>{
  const [user,setUser] = useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [emailError,setEmailError]= useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);

const clearInputs =()=>{
  setEmail('')
  setPassword('')
}
const clearError = () =>{
  setEmailError('')
  setPasswordError('')
}
const handleLogin = () =>{
  clearError();
  fire.auth()
  .signInWithEmailAndPassword(email,password)
  .catch(error =>{
    switch(error.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(error.message);
        break;
      case "auth/wrong-password":
        setPasswordError(error.message);
        break;  
    }
  })
}  
const handleSignUp = () =>{
  clearError();
  fire.auth()
  .createUserWithEmailAndPassword(email,password)
  .catch(error =>{
    switch(error.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        setEmailError(error.message);
        break;
      case "auth/weak-password":
        setPasswordError(error.message);
        break;  
    }
  })
}
const handleLogout = () =>{
  fire.auth().signOut();
}

const authListener = () =>{
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      clearInputs()
      setUser(user)
    }else{
        setUser('')
      }
    })
}
useEffect(()=>{
  authListener();
},[])

  return (
    <div className="App">
    {user ? (
      <Home handleLogout ={handleLogout}/>
    ):(
      <Login email = {email}
    setEmail={setEmail}
     password = {password}
      setPassword = {setPassword}
       handleLogin={handleLogin}
        handleSignUp={handleSignUp}
         hasAccount={hasAccount} 
         setHasAccount={setHasAccount}
          emailError={emailError}
           passwordError={passwordError} />

    )}
 
   
    </div>
  );
  }

export default App;
