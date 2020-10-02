import React from 'react'
import Grid from '../Organisms/Grid/Grid'

function BlogPostLayout(props) {
    const { children } = props;
    return (
        <div>
            {/* <ProfileCardLayout image={props.picture} title={props.family_name} firstName={props.name} lastName={props.family_name} /> */}

            <Grid>{children}</Grid>
        </div>
    )
}

export default BlogPostLayout
