import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Project from './Project'
import DrawerAppBar from './Status';
import DrawerAppBarApprove from './Approve';
import DrawerAppBarRequest from './CaptionRequ';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 750 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        textColor="inherit"
        sx={{ borderRight: 1, borderColor: 'divider' , width:300 ,height: 750}}
      >
        
        <Tab sx={{background:'black',color:"white"}}  className="card-4 mt-4" label="Raise Request" {...a11yProps(0)} />
   
        <Tab sx={{background:'black',color:"white"}} className="card-4 mt-4" label="Approve Request" {...a11yProps(1)} />
        <Tab sx={{background:'black',color:"white"}} className="card-4 mt-4" label="Request Status" {...a11yProps(2)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
        <DrawerAppBarRequest></DrawerAppBarRequest>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DrawerAppBarApprove></DrawerAppBarApprove>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DrawerAppBar></DrawerAppBar>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}