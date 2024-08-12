import { Attachment, Comment, Group } from '@mui/icons-material'
import { Button, CardActions, CardContent, CardMedia, Card as MuiCard, Typography } from '@mui/material'

function Card() {
  return (
    <MuiCard sx={{
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
    </MuiCard>
  )
}

export default Card