import { createTheme } from '@mui/material'
import '@fontsource/poppins'
import '@fontsource/montserrat'


const customTheme = createTheme({
    palette: {
       primary: {
            main: "#fafafa",//White
            light: "#c8c8c8",//Grey light
            dark: "#707070", //Grey darker
            contrastText: '#ffff'
       },
       secondary: {
            main: "#08080a",//Black
            light: "#3e3e4e",//Black light
       },
       background: {
          main: "#ffffff",//blanco
          dark: "#08080a"//negro
       }
    },
    typography: {
     fontFamily: [
          'Poppins',
          'Montserrat'
     ]
    }
})


export default customTheme