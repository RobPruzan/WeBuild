import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import { PostContent } from '../../../../../../services/connections';
export type InputTextProps = {
  setCurrentPostInfo: Dispatch<SetStateAction<PostContent>>;
  currentPostInfo: PostContent;
};
export const InputText = ({
  setCurrentPostInfo,
  currentPostInfo,
}: InputTextProps) => {
  return (
    <TextField
      onChange={event =>
        setCurrentPostInfo(prev => ({ ...prev, content: event.target.value }))
      }
      value={currentPostInfo.content}
      className="p-2 "
      id="outlined-multiline-static"
      multiline
      rows={6}
      variant="standard"
      //  unfocused color of the outline should be white
      sx={{
        color: 'white',
        background: '#141414',
      }}
      InputProps={{
        style: {
          color: 'white',
          background: '#141414',
        },
      }}
      fullWidth
    />
  );
};