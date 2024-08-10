import React, { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Toast from '../Toast/Toast.jsx'

const Register = () => {
    
    const [ success, setSuccess ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ error, setError ] = useState({
        error: false,
        message: ''
    })

    const navigate = useNavigate()
    const URL = 'http://localhost:3001/api/users/user/register'


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
                        first_name: firstName,
                        last_name: lastName,
                        email_register: email,
                        password: pass
                    })
                })
                if(response.ok){
                    setSuccess(true)
                    setTimeout(()=>{
                        navigate('/login')
                    }, 5000)
                }
                setFirstName('')
                setLastName('')
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
                fontSize: '1.6rem'
            }}>
                Crea una cuenta  &#128273;
            </Typography>
            <Typography variant="body1" gutterBottom sx={{
                fontFamily: 'Montserrat',
                color: 'primary.dark',
                fontSize: '0.9rem',
                alignSelf: 'start'
                }}>
               Regístrate para comenzar a chatear con tus amigos
            </Typography>
            </Box>

            <Stack width={1} component='form' useFlexGap direction="column" alignItems="center" onSubmit={handleSubmit} sx={{
                '& .MuiTextField-root': { width: '100%'},
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
                <TextField sx={{mb: '12px'}}
                    color='secondary'
                    size='small'
                    label='Nombre'
                    type='text'
                    required
                    value={firstName} 
                    onChange={(e)=> setFirstName(e.target.value)}/>

                <TextField sx={{mt:'8px', mb: '12px'}}
                    color='secondary'
                    size='small'
                    label='Apellido'
                    type='text'
                    required
                    value={lastName} 
                    onChange={(e)=> setLastName(e.target.value)}/>
                
                <TextField sx={{mt:'8px', mb: '12px'}}
                    color='secondary'
                    size='small'
                    label='Correo electrónico'
                    type='email'
                    value={email}
                    error={error.error}
                    helperText={error.message}
                    required 
                    onChange={(e)=> setEmail(e.target.value)}/>
                
                <TextField sx={{mt:'8px', mb: '16px'}}
                    color='secondary'
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
                        variant='text'
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
                            Registrarse
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
                    ¿Ya tienes una cuenta? <Typography variant='body1' component={'a'} href='/login' sx={{fontFamily: 'Montserrat', color: 'primary.dark', fontSize: '0.9rem', textDecoration: 'underline'}}>Iniciar sesión
                    </Typography>
                    </Typography>
            </Box>
            {success && <Toast type='success' message='Usuario creado exitosamente' />}
        </Box>
    );
}

export default Register