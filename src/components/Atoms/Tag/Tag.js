import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Tag(props) {
    const { children, ...rest } = props;
    return (
        <div>
            <Grid key={props.tag} item xs={3}>
                <Paper  {...rest}>{children}</Paper>
            </Grid>
        </div>
    )
}

export default Tag
