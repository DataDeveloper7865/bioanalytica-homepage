import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import ContentPlaceHolder from '../content/ContentPlaceHolder';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '500px'
    },
    content: {
        display: 'flex',
        alignItems: 'stretch' 
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

function About() {

    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container className={classes.content}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" className={classes.title}>
                        About
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ContentPlaceHolder className={classes.title}/>
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

export default About;