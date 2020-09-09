import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '../Atoms/Typography/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Atoms/Button/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
//needs improvement 
function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                        gutterBottom={true}
                        color='initial'
                        variant='h1'
                        align='center'
                        display='block'
                    >Get smarter about what matters to you.

                    </Typography>


                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Future
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Technology
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Elemental
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Health
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Productivity
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Science
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Business
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Work</Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Artificial Intelligence
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        NeuroScience
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Food</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Relationships</Paper>
                </Grid>


                <Grid item xs={3}>
                    <Paper className={classes.paper}>Design</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Culture</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>CryptoCurrency </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Programming</Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>Life</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Beauty</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Solace</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Computers</Paper>
                </Grid>



                <Grid item xs={12}>

                    <Typography
                        gutterBottom={true}
                        color='initial'
                        variant='h6'
                        align='center'
                        display='block'
                    > Select what you're into. We'll help you find great things to read.

                    </Typography>

                </Grid>







                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>
                    <Button
                        size='large'
                        variant='contained'
                        color='secondary'
                    >
                        GET STARTED
                    </Button>


                </Grid>


                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>

                </Grid>



            </Grid>
        </div>
    )
}

export default LandingPage
