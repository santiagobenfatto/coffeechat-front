import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'


const ConversationsList = ({ convers, onSelectConver }) => {
    return (
      <>
        <List
          sx={{
            flexGrow: 1,
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
          }}
        >
          {Array.isArray(convers) && convers.length > 0 ? (
            convers.map((conver) => {
              const lastMessage =
                conver.messages.length > 0 ? conver.messages[conver.messages.length - 1] : null;
              const secondaryText = lastMessage ? lastMessage.content : 'No hay mensajes para mostrar';
              return (
                <React.Fragment key={conver.conver_id}>
                  <ListItem>
                    <ListItemButton onClick={() => onSelectConver(conver.conver_id)}>
                      <ListItemAvatar>
                        <Avatar alt={conver.name} src={conver.avatar} />
                      </ListItemAvatar>
                      <ListItemText primary={conver.name} secondary={secondaryText} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })
          ) : (
            <ListItem>
              <Typography>No hay conversaciones</Typography>
            </ListItem>
          )}
        </List>
      </>
    );
  };
  
  export default ConversationsList;