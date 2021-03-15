import React from 'react'
import './css/Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "./axios"
import Pusher from 'pusher-js'

const pusher = new Pusher('706141e3de5a37affe0a', {
  cluster: 'us3'
});

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const getConversation = (channelId) => {
    if (channelId) {
      axios.get(`/get/conversation?id=${channelId}`).then((res)=>{
        setMessages(res.data[0].conversation)
      })
    }
  }

  useEffect(() => {
    getConversation(channelId)

    var channel = pusher.subscribe('conversation');
    channel.bind('newMessage', function(data) {
      getConversation(channelId)
    });
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    axios.post(`/new/message?id=${channelId}`,{
      message: input,
      timestamp: Date.now(),
      user: user
    })

    setInput('');
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
            <form>
                <input type="text" disabled={!channelId} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <button className='chat__inputButton' onClick={sendMessage} disabled={!channelId} type='submit'>Send Message</button>
            </form>

      </div>





    </div>
    )
}

export default Chat;
