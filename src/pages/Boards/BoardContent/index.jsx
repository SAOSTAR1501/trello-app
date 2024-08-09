import { AddCard, Attachment, Cloud, Comment, ContentCopy, ContentCut, ContentPaste, DeleteForever, DragHandle, ExpandMore, Group } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '65px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
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
      <Box sx={{
        bgcolor:'inherit',
        width:'100%',
        height:'100%',
        display:'flex',
        overflowX:'auto',
        overflowY:'hidden',
        '&::-webkit-scrollbar-thumb-track': { m:2 }
      }}>
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
            height: COLUMN_HEADER_HEIGHT,
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
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap:1,
            overflowX:'hidden',
            overflowY:'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://cdn-i.vtcnews.vn/upload/2023/08/03/1-13125665.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                SaoStar
                </Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<Group/>}>20</Button>
                <Button size="small" startIcon={<Comment/>}>15</Button>
                <Button size="small" startIcon={<Attachment/>}>10</Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>

          </Box>
          {/* Box column footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
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
            height: COLUMN_HEADER_HEIGHT,
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
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap:1,
            overflowX:'hidden',
            overflowY:'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://cdn-i.vtcnews.vn/upload/2023/08/03/1-13125665.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                SaoStar
                </Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<Group/>}>20</Button>
                <Button size="small" startIcon={<Comment/>}>15</Button>
                <Button size="small" startIcon={<Attachment/>}>10</Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1pxx rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p:1.5 } }}>
                <Typography >
                Thich la nhich
                </Typography>
              </CardContent>
            </Card>

          </Box>
          {/* Box column footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  )
}

export default BoardContent