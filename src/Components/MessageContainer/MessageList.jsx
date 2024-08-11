import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const MessageList = ({messages}) => {
    
    return (
        <Box>
            <List>
                {messages.map((message) => {
                    return (
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar 
                        alt='User Avatar'
                        src='/' 
                        size="large" 
                        edge="start" 
                        color="inherit" 
                        sx={{ 
                            backgroundColor: 'secondary.light', 
                            mr: 2 
                            }}/>
                    </ListItemAvatar>
                    <ListItemText disableTypography={true} sx={{
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        flexGrow: 'unset',
                        maxWidth: '60%',
                        height: 'auto',
                        paddingY: '4px',
                        paddingX: '8px',
                        borderRadius: '8px'
                    }}>
                        <Typography variant='body2'>
                            {message.content}
                        </Typography>
                    </ListItemText>
                </ListItem>
                    )
                })
                }
                
            </List>
        </Box>
    );
}

export default MessageList
