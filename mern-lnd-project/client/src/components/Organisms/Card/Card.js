import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '../../Molecules/CardHeader/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '../../Atoms/IconButton/IconButton';
import Typography from '../../Atoms/Typography/Typography';
import Icon from '../../Atoms/Icon/Icon'
import { red } from '@material-ui/core/colors';
import styled from 'styled-components'
import { Link } from 'react-router-dom';//changes this / uncomment this while using main app
// import Link from '../../Atoms/Link/Link' 

const StyledTypo = styled.div`
  margin-left:400px;
`;

const StyledLink = styled(Link)`
  margin-left:490px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: 50,
    marginLeft: '30%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0.5px 0.5px black',
    opacity: 10
  },
  media: {
    height: 0,
    paddingTop: '50%', // 16:9
    opacity: 50
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function BlogPostCard(props) {
  const classes = useStyles();
  console.log(props.uid);

  return (
    <Card className={classes.root}>

      <CardHeader
        avatarImg={props.cardImage}
        title={props.cardHeaderTitle}
        subheader={props.subHeader}
        avatarString={props.cardHeaderAvatarString}
        iconType='moreVert'>
      </CardHeader>
      <CardMedia
        className={classes.media}
        image={props.cardMedia}
        title="Cardmedia"
      />
      <CardContent>

        <Typography noWrap={true} variant="h4" component="p">
          {props.cardContentHeading}
        </Typography>

        <Typography noWrap={true} variant={props.cardContentVariant} color={props.cardContentColor} component="p">
          {props.cardContent}
        </Typography>
        <StyledLink to={`blogdetail/${props.postId}`}>More</StyledLink>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="clapsIcon">
          <Icon iconType="clapsIcon"></Icon>
        </IconButton>
        <Typography variant="subtitle2" align="inherit">
          {props.clapCount}K
        </Typography>


        <StyledTypo>
          <Typography variant="subtitle2" align="right">
            {props.responseCount} responses
        </Typography>
        </StyledTypo>

      </CardActions>

    </Card>
  );
}
