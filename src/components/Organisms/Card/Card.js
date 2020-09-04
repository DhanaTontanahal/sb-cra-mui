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
import Button from '../../Atoms/Button/Button'

const StyledTypo = styled.div`
  margin-left:400px;
`;



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: 50,
    marginLeft: '30%',
    // backgroundColor:'#F0F8FF',
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

const handleClick=()=>{
  window.location.href="/blogdetail"
}

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


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

        <Typography variant="h4" component="p">
          {props.cardContentHeading}
        </Typography>

        <Typography variant={props.cardContentVariant} color={props.cardContentColor} component="p">
          {props.cardContent}
            <Button onClick={handleClick} size="small">Learn More...</Button>
        </Typography>
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
