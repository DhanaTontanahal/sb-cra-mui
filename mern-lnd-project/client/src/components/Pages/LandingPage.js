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

function LandingPage() {
    const classes = useStyles();
    const tags = ['Future', 'Technology', 'Elemental', 'Health', 'Productivity', 'Science', 'Business', 'Work', 'Artificial Intelligence', 'NeuroScience', 'Food', 'Relationships',
        'Design', 'Culture', 'CryptoCurrency', 'Programming', 'Life', 'Beauty', 'Solace', 'Computers'];
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


                {
                    tags.map((tag) => {
                        return <Grid item xs={3}>
                            <Paper className={classes.paper}>{tag}</Paper>
                        </Grid>
                    })
                }


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
