import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText, IconButton, Divider } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'


const contacts = [
    {
        contact_id:'1',
        name: 'Carlos',
        avatar: 'imageURL'
    },
    {
        contact_id:'2',
        name: 'Laura',
        avatar: 'imageURL'
    },
    {
        contact_id:'3',
        name: 'Madioca',
        avatar: 'imageURL'
    }
]

const Contacts = () => {
    
    
    return (
        <>
        {contacts.map((contact) => (
            <React.Fragment key={contact.contact_id}>
                <ListItem secondaryAction={
                    <>
                    <IconButton onClick={() => {}}>
                        <CheckIcon />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                        <ClearIcon />
                    </IconButton>
                    </>
                }>
                    <ListItemAvatar>
                    <Avatar alt={contact.name} src={contact.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} />
                </ListItem>
                <Divider />
            </React.Fragment>
            )
        )}
        </>
    )
}

export default Contacts;
