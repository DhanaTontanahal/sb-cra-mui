import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'

const StyledAvatar = styled.div`
.small {
    width: 24px;
    height: 24px;
    background-color:lightgray;
    padding:5px;
  }
  .display {
    width: 36px;
    height: 36px;
    background-color:lightgray;
    padding:5px;
  };

.large {
    width: 56px;
    height: 56px;
    background-color:lightgray;
    padding:5px;
  };

`;

  
  export default function AvatarHook(props) {
    const {children,...rest} = props;
    return <StyledAvatar><Avatar { ...rest} className={props.size}>{children}</Avatar></StyledAvatar>  ;
  }
