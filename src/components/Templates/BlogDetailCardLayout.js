import React , {useRef,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginLeft: '34%',
  },
});

export default function BlogDetailCard(props) {
  const classes = useStyles();
  const didMountRef = useRef(false)
    const [blogItem,setBlogItem] = useState([]);

    useEffect(() => {
      if (didMountRef.current) {
        setBlogItem(props.blogItem)
      } else didMountRef.current = true
    },[props.blogItem]);
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={blogItem.cardImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blogItem.cardContentHeading}
          </Typography>
          <Typography variant="body2" align="left" color="textSecondary" component="p">
            {blogItem.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}
