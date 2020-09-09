import React from 'react'
import Button from '../Atoms/Button/Button'
import { useAuth0 } from '@auth0/auth0-react'

function LogoutPage() {
    const {logout} = useAuth0();

    return (
        <div>
            <Button 
             size='medium'
             variant='outlined'
             color='default'
            onClick={()=>logout()}>Logout</Button>
        </div>
    )
}

export default LogoutPage
