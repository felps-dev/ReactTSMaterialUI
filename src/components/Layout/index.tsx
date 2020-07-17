import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton, SwipeableDrawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const appBarHeight = 64;

const useStyles = makeStyles((theme) => ({
    appBar: {
    },
    appContainer: {
        height: `calc(100% - ${appBarHeight}px)`,
    },
    menuButton:{
        marginRight: theme.spacing(1),
    }
}));

interface LayoutProps {
    
}

const Layout: React.FC<LayoutProps> = (props) => {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false); 

    return (
        <div style={{height: '100%'}}>
            <SwipeableDrawer
                anchor='left'
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
            >
                <div>
                    Coloque aqui os dados do seu Drawer
                </div>
            </SwipeableDrawer>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        Inicio
                    </Typography>
                </Toolbar>  
            </AppBar> 
            <div className={classes.appContainer}>
                {props.children}
            </div>  
        </div>
    )
}

export default Layout
