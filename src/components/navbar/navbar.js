import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
      flexGrow: 1,
    },
    linkColor: {
        color: 'white'
    }
  }));

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Link to='/'>
                        <HomeIcon className={classes.linkColor} />
                    </Link>
                </IconButton>
                <Box>
                    <Button color="inherit" >
                        <Link to='/shop'>
                            <Typography className={classes.linkColor}>Shop</Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/about'>
                            <Typography className={classes.linkColor}>About</Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/contact'>
                            <Typography className={classes.linkColor}>Contact</Typography>
                        </Link>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>    
    )
}

export default Navbar
