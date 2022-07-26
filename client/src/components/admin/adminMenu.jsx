import * as React from 'react';
import { Fragment } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Orders from './orders.jsx';
import Sales from './sales.jsx';
import Products from './products.jsx';
import Coupons from './coupons.jsx';
import Users from './users.jsx';
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

export default function AdminMenu() {
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
        <Tab label="Orders" {...a11yProps(0)} />
        <Tab label="Sales" {...a11yProps(1)} />
        <Tab label="Products" {...a11yProps(2)} />
        <Tab label="Coupons" {...a11yProps(3)} />
        <Tab label="Users" {...a11yProps(4)} />
      </Tabs>
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
        <Coupons />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Users />
      </TabPanel>
    </Box>
    <MobileMenu />
    </Fragment>
  );
}
