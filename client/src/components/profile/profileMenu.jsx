import * as React from 'react';
import { Fragment } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import AccountDetails from './accountDetails';
import Payments from './payments';
import OrderHistory from './orderHistory';
import Addresses from './addresses';
import MobileMenu from './mobileMenu.jsx';


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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProfileMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: {xs: "none", md: "flex"}, height: "fit-content" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Account Details" {...a11yProps(0)} />
        <Tab label="Payments" {...a11yProps(1)} />
        <Tab label="Order History" {...a11yProps(2)} />
        <Tab label="Addresses" {...a11yProps(3)} />
      </Tabs>
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
    <MobileMenu />
    </Fragment>
  );
}
