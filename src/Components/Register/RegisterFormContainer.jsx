import React from 'react'
import { Container } from '@mui/material'
import RegisterForm from './RegisterForm.jsx'


const RegisterFormContainer = () => {
    
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
            <RegisterForm />
    </Container>
    );
}

export default RegisterFormContainer;
