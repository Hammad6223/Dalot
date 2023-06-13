import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});



// Create a theme instance.
const theme = createTheme({

  light:'#8A8888',


  primary:  '#2E3192',
  palette: {
    primary: {
      main: '#2E3192',
    },
    secondary: {
      main: '#19857b',
    },
   
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Times New Roman',
    allVariants: {
      color: '#110229'
    }
  },
  shape: {
    borderRadius:8
  },

  components: {

    MuiButton: {
      styleOverrides: {
          root: {
         textTransform:'capitalize',
         fontWeight: 700,
     }
            
          }
      }
  



}

});

export default theme;


    // MuiInputBase: {
    //     styleOverrides: {
    //         root: {
    //           // backgroundColor:'#F9F9F9',
    //           // border: '1px solid #E6E6E6',
              
    //    '&:hover fieldset':{
    //     // border:'none'
    //    }
              
    //         }
    //     }
    // },