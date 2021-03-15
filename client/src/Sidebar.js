import React, { useEffect, useState } from "react"
import "./css/Sidebar.css"
import AddIcon from "@material-ui/icons/Add"
import SidebarChannel from "./SidebarChannel"
import { Avatar } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import { auth } from "./Firebase"
import axios from './axios'
import Pusher from 'pusher-js'
import SimpleModal from "./SimpleModal"
import logo from "./img/logo-small.png"

const pusher = new Pusher('706141e3de5a37affe0a', {
  cluster: 'us3'
});

function Sidebar() {

  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  const getChannels = () => {
      axios.get('/get/channelList')
          .then((res)=> {
              setChannels(res.data)
          })
  }

  useEffect(() => {
      getChannels()

    const channel = pusher.subscribe('channels');
    channel.bind('newChannel', function(data) {
      getChannels()
    });
  }, [])

  const handleAddChannel = (e) => {
    e.preventDefault()

    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      axios.post('/new/channel', {
        channelName: channelName
      })
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={logo} height="30"/>
        <h3>Peer2Peer</h3>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <h4>Channels</h4>
          </div>

          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          {channels.map(channel => (
            <SidebarChannel
              key={channel.id}
              id={channel.id}
              channelName={channel.name}
            />
          ))}
         
        </div>
      </div>


      <div className="sidebar__profile">
        <Avatar className="sidebar__profilePic" src={user.photo}>
        </Avatar>
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
          <p className="sidebar__logout"
            onClick={() => auth.signOut()} src={user.photo}>
              LOGOUT
          </p>
        </div>

        <div className="sidebar__profileIcons">
           <SettingsIcon/>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;
