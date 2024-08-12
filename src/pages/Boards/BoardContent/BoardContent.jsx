import { Box } from '@mui/material'
import ListCoLumns from './ListColumns/ListCoLumns'


function BoardContent() {

  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#1976d2'),
        width: '100%',
        height: (theme) =>
          theme.trello.boardContentHeight,
        p: '10px 0'
      }}
    >
      <ListCoLumns/>
    </Box>
  )
}

export default BoardContent