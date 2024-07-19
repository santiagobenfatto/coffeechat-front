import { Container } from '@mui/material'
import AuthProvider from './Context/AuthContext.jsx'
import CustomRoutes from './Components/CustomRoutes/CustomRoutes.jsx'


const App = () => {

  return (
    <Container disableGutters maxWidth='none' sx={{
      boxSizing: 'border-box',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      p: '24px',
      m: 'none'
      }}>
        <AuthProvider>
          <CustomRoutes />
        </AuthProvider>
        
    </Container>
  )
}

export default App
