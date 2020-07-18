import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton, SwipeableDrawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import { isMobile } from "react-device-detect";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        height: '100%'
    },
    appBar: {

    },
    appBarDesktop: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerContent: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    menuButton:{
        marginRight: theme.spacing(1),
    },
}));

interface LayoutProps {
    
}

const Layout: React.FC<LayoutProps> = (props) => {
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false); 

    return (
        <div className={classes.root}>
            <SwipeableDrawer
                anchor='left'
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
                variant={isMobile ? "temporary" : "permanent"} 
                //Remova a opção de permanent para desktop se quiser o drawer flexível
                className={classes.drawer}
            >
                <div className={classes.drawerContent}>
                    Coloque aqui os dados do seu Drawer
                </div>
            </SwipeableDrawer>
            <AppBar position="fixed" className={isMobile ? classes.appBar : classes.appBarDesktop}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        Inicio
                    </Typography>
                </Toolbar>  
            </AppBar> 
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>  
        </div>
    )
}

export default Layout
