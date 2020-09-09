import React from 'react'
import Input from "./Input"

export default {
    title: 'Atoms`/Input',
    component: Input
}


export const Standard = () =><Input variant="filled" label="Standard" />
export const Outlined = () =><Input id="outlined-basic" label="Outlined" variant="outlined"/>



