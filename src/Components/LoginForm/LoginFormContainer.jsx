import React from 'react'
import { Container } from '@mui/material'
import LoginForm from './LoginForm'


const LoginFormContainer = () => {

    return (
        <Container disableGutters maxWidth='xl' sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.main',
            width: '100%',
            height: '100%',
            maxHeight:'100%'
          }}>
            <LoginForm />
        </Container>
    );
}

export default LoginFormContainer