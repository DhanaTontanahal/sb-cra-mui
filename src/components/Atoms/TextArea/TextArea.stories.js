import React from 'react'
import TextArea from "./TextArea"

export default {
    title: 'Atoms/TextArea',
    component: TextArea
}

export const DynamicTextArea = () => <TextArea style={{width:"100%"}}  placeholder="Enter the content" rowsMin={200}></TextArea>;
