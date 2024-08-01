import React from 'react'
import SearchContainer from '../SearchMenu/SearchContainer.jsx'
import { useConver } from '../../Context/ContextProvider.jsx'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'


const ConversationsList = ({convers}) => {
    const { fetchMessagesByConverId } = useConver()

    return (
        <>
        <SearchContainer/>
        <List 
        sx={{
            flexGrow: 1,
            overflowY: 'scroll',
            scrollBehavior: 'smooth'
        }}>
        { convers.map((conver) => {
            const lastMessage = conver.messages.length > 0 ? conver.messages[conver.messages.length - 1] : null
            const secondaryText = lastMessage ? lastMessage.content : 'No hay mensajes para mostrar'
            return (
           <React.Fragment key={conver.conver_id}>
            <ListItem>
                <ListItemButton onClick={()=> { fetchMessagesByConverId(conver.conver_id) }}>
                    <ListItemAvatar>
                        <Avatar alt={conver.name} src={`${conver.avatar}`} />
                    </ListItemAvatar>
                    <ListItemText primary={conver.name} secondary={secondaryText}/>
                </ListItemButton>
            </ListItem>
            <Divider />
            </React.Fragment> 
         )
        })}
    </List>
    </>
     
    )
}

export default ConversationsList
