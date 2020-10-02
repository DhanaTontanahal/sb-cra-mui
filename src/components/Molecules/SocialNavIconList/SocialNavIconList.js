import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../Atoms/Icon/Icon';
import styled from 'styled-components'
import IconButton from '../../Atoms/IconButton/IconButton'

const StyledIconList = styled.div`

*{
    padding:5px;
    display:inline-block;
    background:none;
}

`;
export default function SocialNavIconList(props) {
    const didMountRef = useRef(false)
    const [twitterUrl, setTwitterUrl] = useState('');

    useEffect(() => {
        if (didMountRef.current) {
            setTwitterUrl(props.twitterUrl)
        } else didMountRef.current = true
    }, [props]);

    return (
        <StyledIconList>
            <IconButton href={twitterUrl}>{<Icon iconType='twitterIcon'></Icon>}</IconButton>
            <IconButton href={twitterUrl}>{<Icon iconType='facebookIcon'></Icon>}</IconButton>
            <IconButton href={twitterUrl}>{<Icon iconType='cardSaveIcon'></Icon>}</IconButton>
            <IconButton href={twitterUrl}>{<Icon iconType='horizontalDotsIcon'></Icon>}</IconButton>

        </StyledIconList>)
}

