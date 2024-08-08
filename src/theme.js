import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#5567FF',
          light: '#879FFF',
          dark: '#3344CC',
          contrastText: '#ffffff'
        },
        secondary: {
          main: '#FF4F9A',
          light: '#FF7FB7',
          dark: '#CC3F7B',
          contrastText: '#ffffff'
        },
        background: {
          default: '#F4F5F7',
          paper: '#ffffff'
        },
        text: {
          primary: '#172B4D',
          secondary: '#6B778C'
        },
        action: {
          active: '#5567FF',
          hover: 'rgba(85, 103, 255, 0.08)'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#879FFF',
          light: '#AAB9FF',
          dark: '#5567FF',
          contrastText: '#ffffff'
        },
        secondary: {
          main: '#FF7FB7',
          light: '#FFA4CB',
          dark: '#FF4F9A',
          contrastText: '#ffffff'
        },
        background: {
          default: '#1A1D21',
          paper: '#282C31'
        },
        text: {
          primary: '#E9EBEE',
          secondary: '#A6ADB7'
        },
        action: {
          active: '#879FFF',
          hover: 'rgba(135, 159, 255, 0.08)'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#BFC5D0',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#A6ADB7'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.primary.light
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.primary.main
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.primary.dark
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.text.secondary,
          fontSize: '0.875rem',
          '&.Mui-focused': {
            color: theme.vars.palette.primary.main
          }
        })
      }
    }
  }
})

export default theme