import Box from '@mui/material/Box';
import Label from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

function GiftRecipient() {
  return (
    <>
      <Label>Recipient name</Label>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" variant="outlined" />
      </Box>
    </>
  );
}

export default GiftRecipient 