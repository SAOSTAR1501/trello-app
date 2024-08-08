import { Badge, Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloIcon from '../../assets/trello.svg'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import { HelpOutline, NotificationsNone } from '@mui/icons-material'
import Profile from './Menus/Profile'

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflowX: 'auto'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'action.active' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box
            component="img"
            src={trelloIcon}
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'text.primary' }}>Saollo</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button variant='contained' color="primary">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type='search' size='small' sx={{ minWidth: '120px', '& .MuiOutlinedInput-root': { color: 'text.primary' } }}/>
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsNone sx={{ color:'action.active' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color:'action.active' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar