import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'

let conversations = []

const ConversationsList = () => {
    return (
        <List 
        sx={{
            flexGrow: 1,
            overflowY: 'scroll',
            scrollBehavior: 'smooth'
        }}>
        { conversations.map((conver => (
           <React.Fragment key={conver.conver_id}>
            <ListItem >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt={`${conver.conver_name}`} src={`${conver.avatar}`} />
                    </ListItemAvatar>
                    <ListItemText primary={`${conver.conver_name}`} secondary='Esto es un texto secundario...'/>
                </ListItemButton>
            </ListItem>
            <Divider />
            </React.Fragment> 
        )))}
    </List>
     
    )
}

export default ConversationsList
