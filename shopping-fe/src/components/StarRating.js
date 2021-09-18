import React from 'react';
import Rating from '@material-ui/lab/Rating';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function StarRating() {
  var starNumber = Math.random() * (5 - 1) + 1;
  const [value, setValue] = React.useState(starNumber);

  return (
    <div>
      
      <Box component="fieldset" mb={-3} borderColor="transparent">
        {/* <Typography component="legend">Read only</Typography> */}
        <Rating name="read-only" value={value} readOnly />
      </Box>
      
      
    </div>
  );
}