import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    root: {
        flexGrow: 1,
      },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
});

class NavBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.menuButton}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                    Over-React
                    </Typography>
                    <Button
                    color="inherit"
                    >
                    Login
                    </Button>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styles, { withTheme: true })(NavBar);