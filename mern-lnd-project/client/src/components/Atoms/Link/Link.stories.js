import React from 'react'
import Link from "./Link"

export default {
    title: 'Atoms/Link',
    component: Link
}

export const HyperLink = () => <Link href="#" onClick={()=>{alert("Hello")}}>ClickMe</Link>
