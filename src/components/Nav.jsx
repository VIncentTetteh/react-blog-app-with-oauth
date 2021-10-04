import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import { Box, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useAuth0 } from "@auth0/auth0-react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Nav({children}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const onSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const onMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const onLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const authNavItems = [
        {
            text: 'Home',
            path: '/',
            icon: <HomeIcon />
        },
        {
            text: 'Create Blog',
            path: '/create',
            icon: <AddIcon />
        }, {
            text: 'About Us',
            path: '/about',
            icon: <InfoIcon />
        },{
            text: 'Contact Us',
            path: '/contact',
            icon: <CallIcon />
      },
        {
            text: 'Profile',
            path: '/profile',
            icon: <AccountCircleIcon />
        }
  ]
  const navItems = [
        {
            text: 'Home',
            path: '/',
            icon: <HomeIcon />
        },
         {
            text: 'About Us',
            path: '/about',
            icon: <InfoIcon />
        },{
            text: 'Contact Us',
            path: '/contact',
            icon: <CallIcon />
        }
    ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap >
           Blogger
          </Typography>
          {
            !onSmallScreen &&
           <Button style={{marginLeft:'400px',color:'white'}} onClick={loginWithRedirect}>
              <Typography >
                    Login
              </Typography>
            </Button>
            
          }
          {
            !onMediumScreen && onSmallScreen &&
              <Button style={{marginLeft:'400px',color:'white'}} onClick={loginWithRedirect}>
                <Typography>
                  Login
                </Typography>
              </Button>
            
          }
          {
            !isAuthenticated && !onLargeScreen && onSmallScreen && onMediumScreen &&
              <Button style={{marginLeft:'700px',color:'white'}} onClick={loginWithRedirect}>
                <Typography>
                  Login
                </Typography>
              </Button>
            
          }
          {
            isAuthenticated && !onLargeScreen && onSmallScreen && onMediumScreen &&
             <Button style={{marginLeft:'700px',color:'white'}} onClick={logout}>
                <Typography>
                  Logout
                </Typography>
              </Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          { isAuthenticated && authNavItems.map((items) => 
            (
              <ListItem
                button
                key={items.text}
                onClick={() => history.push(items.path)}
              >
                <ListItemIcon>{items.icon}</ListItemIcon>
                <ListItemText primary={items.text} />
              </ListItem>
            )
          )
          }
          {
            !isAuthenticated && navItems.map((items) => 
            (
              <ListItem
                button
                key={items.text}
                onClick={() => history.push(items.path)}
              >
                <ListItemIcon>{items.icon}</ListItemIcon>
                <ListItemText primary={items.text} />
              </ListItem>
            )
          )
          }
          
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
