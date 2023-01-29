import "./Contact.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Key, Send } from '@mui/icons-material/';
import { useState } from "react";
import { useRef } from "react";


function Contact() {

const [myMessage , setMyMessages] = useState([])
const [newMessage , setNewMessages] = useState("")


const sendMessage =(e) =>{
  e.preventDefault()

  console.log("message : " , newMessage) 

  setMyMessages ([...myMessage , newMessage])
  // e.target.reset()
}







  return (
    <Box>

      <div className="messagewindow">


      <div className='left message'>
        this is a text message 
      </div>

      <div className='right message'>
        this is a text message
      </div>

      <div className='right message'>
        this is a text message
      </div>

      <div className='left message'>
        this is a text message 
      </div>

      <div className='left message'>
        this is a text message 
      </div>

      <div className='right message'>
        this is a text message
      </div>

        {myMessage.map((eachMessage , Key) => {
          return <div key={Key} className='left message'>
            {eachMessage}
        </div>
        })}



      </div>


<form onSubmit = {sendMessage}>

      <Box  sx={{position:"fixed" , bottom: 0 , width:"100%" , display:"flex" }}>

        <TextField onChange={(e) => {setNewMessages (e.target.value)}} sx ={{width:"100%"}} id="outlined-basic" label="Outlined" placeholder='Type Your Message here' variant="outlined" />
        
        <Box >
        <IconButton  aria-label="send" size="large" >
          <Send fontSize="inherit" />
        </IconButton>
        </Box>
      </Box>
</form>
    </Box>
  );
}
export default Contact