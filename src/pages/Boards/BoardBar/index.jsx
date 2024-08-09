import { AddToDrive, Bolt, Dashboard, FilterList, PersonAdd, Public } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'

const MENU_STYLES = {
  color: 'white', bgcolor: 'transparent', border: 'none', paddingX: '5px', borderRadius:'4px', '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': {
    bgcolor:'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e': '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white'
      }}
    >
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Chip sx={MENU_STYLES} icon={<Dashboard/>} label="Saollo Board"
          clickable/>
        <Chip sx={MENU_STYLES} icon={<Public/>} label="Public workspace"
          clickable/>
        <Chip sx={MENU_STYLES} icon={<AddToDrive/>} label="Add to Google Drive"
          clickable/>
        <Chip sx={MENU_STYLES} icon={<Bolt/>} label="Automation"
          clickable/>
        <Chip sx={MENU_STYLES} icon={<FilterList/>} label="Filters"
          clickable/>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Button
          startIcon={<PersonAdd/>}
          variant='outlined' sx={{ color:'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}>Invite</Button>
        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root' : {
              width: 32,
              height: 32,
              fontSize: 12,
              border:'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}>
          <Tooltip title="Saollo">
            <Avatar alt="Saollo" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Xuanllo">
            <Avatar alt="Saollo" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Saollo">
            <Avatar alt="Saollo" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Saollo">
            <Avatar alt="Saollo" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Saollo">
            <Avatar alt="Saollo" src="/static/images/avatar/1.jpg" />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar