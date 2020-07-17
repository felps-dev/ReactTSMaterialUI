import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import useMainContext from 'src/utils/AppContext';

const useStyles = makeStyles((theme) => ({
    MainWrapper: {
        paddingTop: theme.spacing(3),
        height: '90%',
    },
    MainGrid:{
        height: '100%',
        textAlign: 'center',
    },
    SecondGrid:{
        textAlign: 'center',
    }
}));

const Inicio:React.FC = (props) => {
    const classes = useStyles();
    const [context] = useMainContext();
    return (
        <div className={classes.MainWrapper}>
            <Grid container 
            justify="center" 
            alignItems="center" 
            className={classes.MainGrid}>
                <Grid item xs={10} md={8} lg={4}>
                    <Typography variant="h2" style={{marginBottom: '10px'}}>
                        Olá
                    </Typography>
                    <Paper style={{padding: '20px'}}>
                        <Typography variant="body1">
                            Comece a editar agora mesmo! A aplicação principal fica em App.js, coloque suas rotas e suas views seguindo o padrão descrito no read.me :D ! 
                            Conto com você!
                        </Typography>
                        <Typography variant="body1">
                            Versão atual: {context.version}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container 
            justify="center" 
            alignItems="center"
            className={classes.SecondGrid}>
                <Grid item xs={4}>
                    <Typography variant="body1" color="primary">
                        Feito com ❤ por <a href="http://gmartinu.dev">Gabriel Martinusso</a> e <a href="http://felps.dev">Felipe Correa</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Inicio
