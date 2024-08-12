import { NoteAdd } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import Column from './Column/Column'

function ListCoLumns() {
  return (
    <Box sx={{
      bgcolor:'inherit',
      width:'100%',
      height:'100%',
      display:'flex',
      overflowX:'auto',
      overflowY:'hidden',
      '&::-webkit-scrollbar-thumb-track': { m:2 }
    }}>
      <Column/>
      <Column/>
      <Column/>
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx:2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor:'#ffffff3d'
      }}>

        {/* Add new column */}
        <Button startIcon={<NoteAdd/>}
          sx={{ color: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListCoLumns