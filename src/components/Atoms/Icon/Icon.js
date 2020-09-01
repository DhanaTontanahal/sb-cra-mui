import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert'

const iconToSwitch = (iconType) => {
    switch(iconType) {
      case "search":   return <SearchIcon />;
      case "notification":   return <NotificationsNoneIcon />;
      case "menu":   return <MenuIcon />;
      case "moreVert": return   <MoreVertIcon />;
      default:return <h1>No project match</h1>
    }
  }


function Icon1(props) {
    const {iconType} =props;
    return (
        <>
            {
                iconToSwitch(iconType)
            }
        </>
    )
}

export default Icon1
