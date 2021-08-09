import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import ContentPlaceHolder from '../content/ContentPlaceHolder';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    footer: {
        minHeight: '500px',
        backgroundColor: theme.palette.primary.main
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
}))

function Footer() {

    const classes = useStyles()

    return (
        <div className={classes.footer} >
            <Grid container className={classes.content}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" className={classes.title}>
                        About
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                        <ContentPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4}>
                        <ContentPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4}>
                    
                        <ContentPlaceHolder />
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;