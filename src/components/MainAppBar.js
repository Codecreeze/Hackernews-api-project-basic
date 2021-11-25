import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CommentIcon from '@mui/icons-material/Comment';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PreviewIcon from '@mui/icons-material/Preview';
import WorkIcon from '@mui/icons-material/Work';
import PublishIcon from '@mui/icons-material/Publish';
import LightModeIcon from '@mui/icons-material/LightMode';


const isDarkModeEnabled = window.localStorage.getItem("darkmode") == 'yes'

export default function MainAppBar() {

  const MenuButton = styled(Button)`
    color: #fff;
    margin-left: 4px;
  `

  const switchTheme = () => {
    window.localStorage.setItem( "darkmode", isDarkModeEnabled ? 'no' : 'yes' )
    window.location.reload()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img alt="YC" src="https://news.ycombinator.com/y18.gif" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Hacker News
          </Typography>
          
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MenuButton startIcon={<NewReleasesIcon />} variant="contained" size="small">new</MenuButton>
            <MenuButton startIcon={<SettingsBackupRestoreIcon />} variant="contained" size="small">past</MenuButton>
            <MenuButton startIcon={<CommentIcon />} variant="contained" size="small">comments</MenuButton>
            <MenuButton startIcon={<QuestionMarkIcon />} variant="contained" size="small">ask</MenuButton>
            <MenuButton startIcon={<PreviewIcon />} variant="contained" size="small">show</MenuButton>
            <MenuButton startIcon={<WorkIcon />} variant="contained" size="small">jobs</MenuButton>
            <MenuButton startIcon={<PublishIcon />} variant="contained" size="small">submit</MenuButton>
            <IconButton onClick={switchTheme}>
            <Tooltip title={isDarkModeEnabled ? "Switch to Light Mode": "Switch to Dark Mode"}>
              <LightModeIcon style={{color: "#fff"}} />
            </Tooltip>
          </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
           H2
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
