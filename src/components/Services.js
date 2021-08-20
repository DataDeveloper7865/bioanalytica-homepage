import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import ServicesPlaceHolder from '../content/ServicesPlaceHolder';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '500px'
    },
    content: {
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

function Services() {

    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container className={classes.content}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" className={classes.title}>
                        Services
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" className={classes.title}>
                        Consulting
                    </Typography>
                    <ServicesPlaceHolder/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" className={classes.title}>
                        IOT
                    </Typography>
                    <ServicesPlaceHolder />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" className={classes.title}>
                        Software Development
                    </Typography>
                    <ServicesPlaceHolder />
                </Grid>
            </Grid>
        </div>
    )

}

export default Services;