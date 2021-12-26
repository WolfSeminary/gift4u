import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const GiftDetailed =()=> {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
        <Typography component="div">  
        <Box sx={{ textAlign: 'right', m: 1 }}>
            <CardHeader title="price"/></Box>
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image=""
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button id="btn" variant="contained" disableElevation>
      CHOOSE
    </Button>
      </CardActions>
    </Card>
  );
}
export default GiftDetailed;