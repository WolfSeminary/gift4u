import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const GiftSender = () => {
  return (
    <>
      <Label>🟠 Who send the gift?</Label>
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
export default GiftSender;