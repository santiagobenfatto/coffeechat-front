import { AppBar, Toolbar, Avatar, Typography, Button } from '@mui/material'
import { useAuth } from '../../Context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

const NavBar = ({isChat}) => {
    const { isConnected, disconnectSocket, user } = useAuth()
    const navigate = useNavigate()
    const URL = 'http://localhost:3001/api/users/user/logout'

    const handleLogout = async () => {
        if(isConnected){
            try {
                const response = await fetch(URL , {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                if(response.status === 200){
                    disconnectSocket()
                    navigate('/login')
                }
            }    
            catch (error) {
            console.log(error)
            }
        }
    }


    return (  
    <>
    {
        isChat ? 
        <AppBar elevation={0} sx={{
            position: 'sticky',
            backgroundColor: 'primary.main',
            height: '80px',
            justifyContent:'center',
            borderBottom: '1px solid',
            borderColor: 'primary.light'
        }}>
        <Toolbar sx={{
            position: 'sticky',
            backgroundColor: 'primary.main',
            height: '80px',
            justifyContent:'center'
        }}> 
        <Avatar alt='User Avatar' src={user.avatar_url} size="large" edge="start" color="inherit" sx={{ backgroundColor: 'secondary.light', mr: 2 }}/>
        <Typography variant='body1' sx={{ flexGrow: 1, color: 'secondary.main', textTransform: 'capitalize'}}>
                {user.nickname ? user.nickname : user.first_name}
            </Typography>
        </Toolbar>
        </AppBar>
        :
        <AppBar elevation={0} sx={{
            position: 'sticky',
            backgroundColor: 'primary.main',
            height: '80px',
            justifyContent:'center',
            borderBottom: '1px solid',
            borderColor: 'primary.light'
        }}>
            <Toolbar>
            <Avatar  alt='User Avatar' src='https://i.pinimg.com/originals/ee/63/0a/ee630afacf4df49fc912ed67211176b2.jpg' size="large" edge="start" color="inherit" sx={{ backgroundColor: 'secondary.light', mr: 2 }}/>
            <Typography variant='body1' sx={{ flexGrow: 1, color: 'secondary.main'}}>
                Coffee Chat
            </Typography>
            <Button 
            disableElevation
            variant="outlined"
            onClick={ handleLogout }
            sx={{
                fontFamily: 'Poppins',
                letterSpacing: '1px',
                fontWeight: 500,
                color: 'secondary.main',
                ':hover': {
                    backgroundColor: 'primary.light'
                }
            }}>
                    LOGOUT
            </Button>
            </Toolbar>
        </AppBar>
    }
    </>
       
    )
}

export default NavBar
