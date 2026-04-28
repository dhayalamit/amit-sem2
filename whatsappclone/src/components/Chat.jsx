import React from 'react'
import { useParams } from 'react-router-dom'

const chat = () => {
    const param = useParams();
    console.log(param.chatID);
    return(
        <div> Chat</div>
    )
}

export default chat