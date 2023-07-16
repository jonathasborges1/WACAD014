import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../Navbar';

interface Props {
   children?: React.ReactNode;
}

const Component: React.FC<Props> = ({ children }) => {
   return (
      <Grid container>
         <Grid item xs={12}>
            <Navbar></Navbar>
         </Grid>
         <Grid item xs={12}>
            {children}
         </Grid>
      </Grid>
   )
}

export default Component;