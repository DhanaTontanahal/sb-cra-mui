import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function TextareaAutosizeHook(props) {
    const {...rest} = props;
  return <TextareaAutosize  {...rest}  />
}
