import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import Box from '@mui/material/Box'

import { useColorScheme } from '@mui/material/styles'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='label-select-dark-light-mode' sx={{ color: 'white', '&.Mui-focused': {
        color:'white'
      } }}>Mode</InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
        sx={{ color :'white', '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'white'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white'
        },
        '.MuiSvgIcon-root': {
          color: 'white'
        } }}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeOutlinedIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessOutlinedIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect