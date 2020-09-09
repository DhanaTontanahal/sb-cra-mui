import React from 'react'
import Icon from '../../Atoms/Icon/Icon';
import styled from 'styled-components'

const StyledIconList = styled.div`

*{
    padding:5px;
    display:inline-block;
    background:none;
}

`;
export default function SocialNavIconList(props) {
    return (
        <StyledIconList>
            <Icon iconType='twitterIcon'></Icon>
            <Icon iconType='facebookIcon'></Icon>
            <Icon iconType='cardSaveIcon'></Icon>
            <Icon iconType='horizontalDotsIcon'></Icon>
        </StyledIconList>)
}