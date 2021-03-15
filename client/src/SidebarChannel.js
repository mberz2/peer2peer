import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { setChannelInfo } from "./features/appSlice";
import { selectChannelId } from './features/appSlice'
import "./css/SidebarChannel.css";
import DelIcon from "@material-ui/icons/Remove"
import axios from "axios"

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  const channelId = useSelector(selectChannelId);

  const handleRemoveChannel = (e) => {
    e.preventDefault()

    var answer = window.confirm("Are you sure you want to delete this channel?");
    if (answer) {

      axios.delete(`/delete/:id=${channelId}`)

    }
    else {
        //some code
    }

  };

  return (

    
    <div
      className="sidebarChannel"
      onClick={ () =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>#  {channelName}
        <DelIcon onClick={handleRemoveChannel}/>
      </h4>


    </div>

  );
}

export default SidebarChannel;
