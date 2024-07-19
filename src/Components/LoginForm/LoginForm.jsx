import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useAuth } from '../../Context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const { connectSocket, checkSession } = useAuth()
    const navigate = useNavigate()
    const URL = 'http://localhost:3001/api/users/user/login'

    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ error, setError ] = useState({
        error: false,
        message: ''
    })

    //checkSession()

    const emailValidation = (email) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
        return regex.test(email)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!emailValidation(email)){
            setError({
                error:true,
                message: 'Introduce un email válido'
            })
        }else {
            setError({
                error: false,
                message: ''
            })
            try {
                const response = await fetch(URL , {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email_register: email,
                        password: pass
                    })
                })
                if(response.status === 200){
                        navigate('/display')
                        connectSocket()
                }
                setEmail('')
                setPass('')
            }    
            catch (error) {
            console.log(error)
            }
        }
    }

    return (
        <Box sx={{
            boxSizing: 'border-box',
            backgroundColor: 'background.main',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifySelf: 'flex-start',
            width: '500px',
            height: '550px',
            border: '1px solid',
            borderColor: '#e3e3e8',
            borderRadius: '8px',
            marginTop: '1rem',
            marginBottom: '2.2rem',
            paddingBottom: '1rem',
            paddingTop: '2.5rem',
            paddingRight: '2rem',
            paddingLeft: '2rem'
        }}>
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    width: '90%',
                    height:'auto'
                }}>
            <Typography variant="h3" gutterBottom sx={{
                fontFamily: 'Montserrat',
                color: 'black',
                fontSize: '1.6rem',
            }}>
                Bienvenido! &#128273;
            </Typography>
            <Typography variant="body1" gutterBottom sx={{
                fontFamily: 'Montserrat',
                color: 'primary.dark',
                fontSize: '0.9rem',
                alignSelf: 'start'
                }}>
                Accede a tu cuenta para chatear con tus amigos
            </Typography>
            </Box>

            <Stack width={1} component='form' useFlexGap direction="column" alignItems="center" onSubmit={handleSubmit} sx={{
                '& .MuiTextField-root': { width: '100%' },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '1px',
                },
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderColor: '#16161a'
                    }
                },
                boxSizing: 'border-box',
                width: '90%',
                maxHeight: '385px',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }} noValidate autoComplete='off'>
                <TextField sx={{mb: '16px'}}
                    color='secondary'
                    size='small'
                    label='Correo electrónico'
                    type='email'
                    value={email}
                    error={error.error}
                    helperText={error.message}
                    required 
                    onChange={(e)=> setEmail(e.target.value)}/>
                
                <TextField sx={{mt:'12px', mb: '16px'}}
                    color= 'secondary'
                    size='small'
                    label='Contraseña'
                    type='password'
                    required
                    value={pass} 
                    onChange={(e)=> setPass(e.target.value)}/>
                
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    width: '100%',
                    gap: '16px'
                }}>
                    <Button
                        type='submit'
                        variant='contained'
                        disableElevation
                        sx={{
                            fontFamily: 'Poppins',
                            letterSpacing: '1px',
                            fontWeight: 500,
                            width: '100%',
                            backgroundColor: 'secondary.main',
                                ':hover': {
                                    backgroundColor: 'secondary.light'
                                }
                        }}>
                        Enviar
                    </Button>

                    <Button 
                        href='/anonimous-login'
                        variant='text'
                        disableElevation
                        sx={{
                            fontFamily: 'Poppins',
                            letterSpacing: '1px',
                            fontWeight: 500,
                            color: 'secondary.main',
                            width: '100%',
                            ':hover': {
                                backgroundColor: 'primary.light'
                            }
                    }}>
                        Ingresar como anónimo
                    </Button>
                </Box>               
            </Stack>
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    width: '90%',
                    height:'auto'
                }}>
            <Typography variant="body1" gutterBottom sx={{
                fontFamily: 'Montserrat',
                color: 'primary.dark',
                fontSize: '0.9rem',
                alignSelf: 'start',
                marginTop: '1rem'}}>
                    ¿No tienes una cuenta? <Typography variant='body1' component={'a'} href='/register' sx={{fontFamily: 'Montserrat', color: 'primary.dark', fontSize: '0.9rem', textDecoration: 'underline'}}>Regístrate aquí
                    </Typography>
                    </Typography>
            </Box>
        </Box>
    );
}

export default LoginForm