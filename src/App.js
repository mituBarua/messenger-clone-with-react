import React, {useState , useEffect} from 'react';

import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username , setUsername] = useState('');

 //usestate = variable in react or temporary storing data
 //useeffect = run code on a condition in REACT

 useEffect(() => {
  
  db.collection('messages')
  .orderBy('timestamp','desc')
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data() })))
  });
 }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));

  //if its blank inside [], this code runs once when the app component loads
},[]) //contdition

  const sendMessage =(event) => {
  event.preventDefault();
  db.collection('messages').add({
    message: input,
    username: username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  // setMessages([...messages, {username: username, text: input }]);
  setInput('');
  }

  return (

    <div className="App">
    <img src="https://techcrunch.com/wp-content/uploads/2018/10/Messenger-Logo.png?w=100&h=100"/>
      <h1>Welcome to Messenger</h1>

      <form className="app__form">
      <FormControl className="app__formcontrol">
    <Input className="app__input" placeholder ='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
      <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
      <SendIcon/>
      </IconButton>
      
      </FormControl>

      </form>
     

      {/*messages themselves*/}
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username = {username} message = {message} />
        ))
      }
      </FlipMove>
     
    </div>
  );
}

export default App;
