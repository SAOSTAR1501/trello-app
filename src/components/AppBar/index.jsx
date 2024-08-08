import { Badge, Box, Button, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloIcon from '../../assets/trello.svg'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import { Close, HelpOutline, LibraryAdd, NotificationsNone, Search } from '@mui/icons-material'
import Profile from './Menus/Profile'
import { useState } from 'react'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50': '#1565c0')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box
            component="img"
            src={trelloIcon}
            sx={{ width: 36, height: 36 }}
          />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Saollo</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button startIcon={<LibraryAdd/>} sx={{ color: 'white' }}>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type='text'
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{ minWidth: '120px', maxWidth: '180px', '& label' : { color: 'white' }, '& input' : { color: 'white' }, '& label.Mui-focused' : { color: 'white' }, '& .MuiOutlinedInput-root' : { '& fieldset' : { borderColor: 'white' }, '&:hover fieldset' : { borderColor: 'white' }, '&.Mui-focused fieldset' : { borderColor: 'white' } } }}
          InputProps={
            {
              startAdornment:(
                <InputAdornment position='start'>
                  <Search sx={{ color: 'white' }}/>
                </InputAdornment>
              ),
              endAdornment: (
                <Close fontSize='small' sx={{ color: searchValue ? 'white': 'transparent', cursor: 'pointer' }} onClick={() => setSearchValue('')}/>
              )
            }
          }
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsNone sx={{ color:'white' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color:'white' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar