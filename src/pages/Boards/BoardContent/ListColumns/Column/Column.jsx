import { AddCard, Cloud, ContentCopy, ContentCut, ContentPaste, DeleteForever, DragHandle, ExpandMore } from '@mui/icons-material'
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'
import ListCards from './ListCards/ListCards'


function Column() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643': '#ebecf0'),
      ml: 2,
      borderRadius: '6px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
    }}>
      {/* Box column header */}
      <Box sx={{
        height: (theme) => theme.trello.columnHeaderHeight,
        p:2,
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Typography
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
        >Column Title</Typography>
        <Box>
          <Tooltip title="More options">
            <ExpandMore
              sx={{ color: 'text.primary', cursor:'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCard fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>

            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>

            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>

            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>

            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Achieve this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DeleteForever fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Box column list card */}
      <ListCards/>
      {/* Box column footer */}
      <Box sx={{
        height: (theme) => theme.trello.columnFooterHeight,
        p:2,
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Button startIcon={<AddCard/>}>Add new card</Button>
        <Tooltip title='Drag to move'>
          <DragHandle sx={{ cursor:'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column