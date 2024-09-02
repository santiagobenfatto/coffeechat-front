import { Container } from '@mui/material'
import AuthProvider from './Context/AuthContext.jsx'
import CustomRoutes from './Routes/CustomRoutes/CustomRoutes.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'


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
        <Provider store={store}>
          <AuthProvider>
            <CustomRoutes />
          </AuthProvider>
        </Provider>
    </Container>
  )
}

export default App
