import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import React from 'react'

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding:0 }}
          aria-controls={open ? 'basic-menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/404654423_885050763138612_5499757506508581049_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeE-HAnNixPDoRphBcY0uQHfCH9ReTK-rAwIf1F5Mr6sDFouFHVG5zx3wipWnorFyfj1CmqrDKm2-QuXYieI8DGi&_nc_ohc=YMb_KbUzw5cQ7kNvgFWd2B0&_nc_ht=scontent.fhan15-1.fna&oh=00_AYDe7cXghiYOoHGMD5U67kDMP-_ACp2hPXym8jApTP-qiQ&oe=66BA5AE9'
            alt='Saollo'
            sx={{ width: 30, height: 30 }}/>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }}/> Profile
        </MenuItem>
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }}/> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile