import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        backgroundColor: '#000000',
        color: '#ffffff',
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" component="p" color="inherit" >
                © {new Date().getFullYear()} - Desarrollado por Luz Edith Tobar con ❤ usando React y Material-UI- basado en microfrontends
            </Typography>
        </footer>
    );
}
