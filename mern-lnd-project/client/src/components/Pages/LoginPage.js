import React from 'react'
import Button from '../Atoms/Button/Button'
import { useAuth0 } from '@auth0/auth0-react'

function LoginPage() {
    const {loginWithRedirect} = useAuth0();

    return (
        <div>
            <Button 
             size='medium'
             variant='outlined'
             color='default'
            onClick={()=>loginWithRedirect()}>Click to Login</Button>
        </div>
    )
}

export default LoginPage
