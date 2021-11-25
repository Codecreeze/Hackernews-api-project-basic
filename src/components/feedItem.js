import * as React from 'react';
import { Link, ListItem,Paper,ListItemAvatar,Avatar,ListItemText,Typography} from '@mui/material';
import randomColor from 'randomcolor';
import moment from 'moment';
import './feedItem.css';

const FeedItem = props => {
    // const isDarkModeEnabled = ( `#${window.getComputedStyle(document.body, null).getPropertyValue('background-color').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}` ) == "#121212";
    const isDarkModeEnabled = window.localStorage.getItem("darkmode") == 'yes'
    
    let color = randomColor({
        luminosity: isDarkModeEnabled ? 'light': 'dark'})
  
  return (
    <Paper key={props.data.id} className="feed-item-element" style={{
        padding: 10,
        width: '100%',
        margin: 10
    }}>
    <ListItem  alignItems="flex-start">
        <ListItemAvatar>
        <Link  underline="none" href={props.data.url}><Avatar style={{background: color}}>{props.data.title[0]}</Avatar></Link>
        </ListItemAvatar>
        <ListItemText
          children={<Link style={{ color: isDarkModeEnabled ? '#fff' : '#000' }} underline="none" href={props.data.url}>{props.data.title}</Link>}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                by <Link underline="hover" style={{ color: isDarkModeEnabled ? '#fff' : '#000' }}>{props.data.by}</Link> &#8226; { moment.unix(props.data.time).fromNow() } &#8226; {props.data.descendants} {props.data.descendants > 1 ? "comments": "comment"}
              </Typography>
          }
        />
      </ListItem>
      </Paper>
  );
}

export default FeedItem