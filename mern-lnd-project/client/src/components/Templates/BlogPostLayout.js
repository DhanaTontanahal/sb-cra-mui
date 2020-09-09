import React from 'react'
import Grid from '../Organisms/Grid/Grid'

function BlogPostLayout(props) {
    const {children} = props;
    return (
        <div>
            <Grid>{children}</Grid>
        </div>
    )
}

export default BlogPostLayout
