import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SvgIcon from "../SvgIcon/SvgIcon"
import Icon from '@material-ui/core/Icon';

const ClapsIcon = () => <SvgIcon>
    <svg width="25" height="25" aria-label="clap"><g fillRule="evenodd"><path d="M11.74 0l.76 2.97.76-2.97zM16.63 1.22L15.2.75l-.4 3.03zM9.79.75l-1.43.47 1.84 2.56zM22.47 13.3L19.45 8c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M12.58 9.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"></path><path d="M15.81 9.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.72.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L7.2 6.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L3.8 7.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L2.58 14.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"></path></g></svg>
</SvgIcon>


const SaveIcon = () => <SvgIcon>
    <path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fillRule="evenodd"></path>
</SvgIcon>

export const SavedIcon = () => <SvgIcon>
    <svg width="25" height="25" viewBox="0 0 25 25" className="cu z g"><path d="M16 6a2 2 0 0 1 2 2v13.66h-.01a.5.5 0 0 1-.12.29.5.5 0 0 1-.7.03l-5.67-4.13-5.66 4.13a.5.5 0 0 1-.7-.03.48.48 0 0 1-.13-.29H5V8c0-1.1.9-2 2-2h9zM6 8v12.64l5.16-3.67a.49.49 0 0 1 .68 0L17 20.64V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M21 5v13.66h-.01a.5.5 0 0 1-.12.29.5.5 0 0 1-.7.03l-.17-.12V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1H8c0-1.1.9-2 2-2h9a2 2 0 0 1 2 2z"></path></svg>
</SvgIcon>

export const TwitterIcon = () => <SvgIcon>
    <svg width="29" height="29" className="bh"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>
</SvgIcon>

export const LinkedInIcon = () => <SvgIcon>

</SvgIcon>


export const FacebookIcon = () => <SvgIcon>
    <svg width="29" height="29" className="bh"><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg>
</SvgIcon>


export const HorizontalDotsIcon = () => <SvgIcon>
    <svg className="q ct sv" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fillRule="evenodd"></path></svg>
</SvgIcon>



const iconToSwitch = (iconType) => {
    switch (iconType) {
        case "search": return <SearchIcon />;
        case "notification": return <NotificationsNoneIcon />;
        case "menu": return <MenuIcon />;
        case "moreVert": return <MoreVertIcon />;
        case "clapsIcon": return ClapsIcon();
        case "cardSaveIcon": return SaveIcon();
        case "appBarSavedIcon": return SavedIcon();
        case "twitterIcon": return TwitterIcon();
        case "linkedInIcon": return LinkedInIcon();
        case "facebookIcon": return FacebookIcon();
        case "horizontalDotsIcon": return HorizontalDotsIcon();
        case "newItem": return <Icon>add_circle</Icon>;

        default: return <h1>No project match</h1>
    }
}


function Icon1(props) {
    const { iconType } = props;
    return (
        <>
            {
                iconToSwitch(iconType)
            }
        </>
    )
}

export default Icon1
