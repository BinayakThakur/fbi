import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Divider, Typography } from '@mui/material';

export default function SliderSizes() {
  return (<>
     <Box width={"16rem"} >
      Java Core<Divider className="mt-3 mb-3"/>
      Azure Fundamentals<Divider className="mt-3 mb-3"/>
      Python Basics<Divider className="mt-3 mb-3"/>
      JavaScript<Divider className="mt-3 mb-3"/>
      HTML5 and CSS<Divider className="mt-3 mb-3"/>
      My SQL<Divider className="mt-3 mb-3"/>
      React JS<Divider className="mt-3 mb-3"/>
      J2EE<Divider className="mt-3 mb-3"/>
      Spring Core<Divider className="mt-3 mb-3"/>
    </Box></>
  );
}