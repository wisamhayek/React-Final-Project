import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Orders from './orders.jsx';
import Sales from './sales.jsx';
import Products from './products.jsx';
import Promotion from './promotion.jsx';
import Users from './users.jsx';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',display: {xs: "block", md: "none"} }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        >
        <Tab label="Orders" {...a11yProps(0)} />
        <Tab label="Sales" {...a11yProps(1)} />
        <Tab label="Products" {...a11yProps(2)} />
        <Tab label="Promotions" {...a11yProps(3)} />
        <Tab label="Users" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Orders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sales />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Products />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Promotion />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Users />
      </TabPanel>
    </Box>
  );
}
