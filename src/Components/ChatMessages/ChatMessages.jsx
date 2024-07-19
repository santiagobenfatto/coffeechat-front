import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const ChatMessages = () => {
    
    return (
        <Box>
            <List>
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
                            {'Hola, estoy llegando, espero que esté todo bien! (:'}
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    );
}

export default ChatMessages
