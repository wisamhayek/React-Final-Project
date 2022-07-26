import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import AccountDetails from './accountDetails';
import Payments from './payments';
import OrderHistory from './orderHistory';
import Addresses from './addresses';


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
        <Box sx={{ p: 1 }}>
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
        <Tab label="Account Details" {...a11yProps(0)} />
        <Tab label="Payments" {...a11yProps(1)} />
        <Tab label="Order History" {...a11yProps(2)} />
        <Tab label="Addresses" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AccountDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Payments />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderHistory />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Addresses />
      </TabPanel>
    </Box>
  );
}
