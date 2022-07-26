import * as React from 'react';
import { useState,useContext, useEffect } from 'react';
import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import { Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import * as ROUTES from '../../constants/routes';
import SearchAppBar from './search';
import { UserContext } from '../../App';
import LoginModal from './loginModal';

const pages = ['Home', 'Browse', 'Contact'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {

    const navigate = useNavigate();
    const {userContext, setUserContext} = useContext(UserContext)

    useEffect(()=>{
        var userActive = JSON.parse(localStorage.getItem('activeUser'));
        if(userActive){
          setUserContext(userActive)
        }else{
          setUserContext(null)
        }
    },[])

    function logout(){
        setUserContext(null)
        localStorage.clear()
    }

    // Profile Icon Menu list
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (e) => {
        if(e === "Profile"){
            navigate(ROUTES.PROFILE)
        }
        if(e === "Logout"){
            logout()
        }
        setAnchorElUser(null);
    };

    //Navigation Function
    function navigateMenu(e){
        // console.log(e);
        if(e === "HOME" || e === "Home"){
            navigate(ROUTES.HOME)
        }
        if(e === "BROWSE" || e === "Browse"){
            navigate(ROUTES.BROWSE)
        }
        if(e === "CONTACT" || e === "Contact"){
            navigate(ROUTES.HOME)
        }
    }


    //Side Menu Drawer
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    //Drawer Design/List
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                overflow: "scroll",
                padding:"1rem",
                backgroundColor: '#1976d2',
                height: "100vh",
                textAlign:"center"
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* <Typography  sx={{textAlign: "center",padding: "1rem"}}>Hotels Logo</Typography> */}
        <Typography variant="h6" noWrap 
            // component="a" href="/"
            sx={{
                textAlign: "center",
                padding: "1rem",
                mr: 2,
                display: { xs: 'block', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'White',
                textDecoration: 'none',
                margin:"auto"
            }}
        >
            LOGO
        </Typography>
        <Divider/>
        {pages.map((page) => (
            <MenuItem key={page} onClick={(e)=>{navigateMenu(e.target.innerText)}}>
            <Typography textAlign="center" color={"white"} sx={{margin:"auto"}}>{page}</Typography>
            </MenuItem>
        ))}
        <Divider sx={{marginTop:"1rem"}}/>
        {/* <Button size="small" onClick={()=>{navigate(ROUTES.ADMIN)}}>Admin</Button> */}
        </Box>
    );



    return (
        <>
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                // component="a"
                // href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>

            {/* Side Menu ICON Section - On Mobile View */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="open navigation bar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer('left', true)}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
            </Box>

            {/* Logo Section - Hidden for now on both views*/}
            <AdbIcon sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>


            {/* Menu list Section - Desktop View  */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={(e)=>{
                        navigateMenu(e.target.innerText)
                        // navigate(`${page}`)
                    }}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>


            {/* Search Bar Section */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                <SearchAppBar />
            </Box>

            
            {/* Cart Icon */}
            <Box sx={{ flexGrow: 0 }}>
            <IconButton
                size="large"
                aria-label="go to cart page"
                aria-controls="go-to-cart"
                aria-haspopup="true"
                onClick={()=>{navigate(ROUTES.CART)}}
                color="inherit"
                >
                <ShoppingCartIcon />
                </IconButton>
            </Box>

            

            {/* User Profile Section */}
            {userContext?.name &&
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userContext.name} src="#" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={(e)=>{
                        handleCloseUserMenu(e.target.innerText);
                        }}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            }

            {!userContext?.name && 
                <LoginModal />
            }

            </Toolbar>
        </Container>
        </AppBar>

        <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
        >
            {list('left')}
        </Drawer>
        </>
    );
};
export default ResponsiveAppBar;
