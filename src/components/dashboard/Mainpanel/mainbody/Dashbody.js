import React from 'react'
import "./assets/forms.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }



// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

const Dashbody = () => {
  return (
    <>
    <h3>Recent orders</h3>
    <div className="Table">
        
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Position" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Address" variant="outlined" defaultValue="Hello World" />
      {/* <TextField id="outlined-basic" label="Facebook" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Twitter" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Github" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Phone 1" variant="outlined" defaultValue="Hello World" />
      <TextField id="outlined-basic" label="Phone 2" variant="outlined" defaultValue="Hello World" /> */}
      {/* <TextField id="outlined-basic" label="Facebook" variant="outlined" defaultValue="Hello World" /> */}
      {/* <TextField id="outlined-basic" label="Facebook" variant="outlined" defaultValue="Hello World" /> */}
      {/* <TextField id="outlined-basic" label="Facebook" variant="outlined" defaultValue="Hello World" /> */}
      <div>
      <Button variant="contained" endIcon={<SendIcon />} fullWidth>
        Send
      </Button>
      </div>
    </Box>
        
    </div>
    
    </>
  )
}

export default Dashbody