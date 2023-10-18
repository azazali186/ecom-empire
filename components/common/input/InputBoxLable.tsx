import React, { ChangeEventHandler } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface inputBoxLableProps {
    label: string;
    id: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler;
  }


const InputBoxLable: React.FC<inputBoxLableProps> = ({ label, id, type = "text", onChange, value}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} name={id} label={label} variant="outlined" type={type} onChange={onChange} value={value}/>
    </Box>
  )
}

export default InputBoxLable