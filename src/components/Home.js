import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import ContentPlaceHolder from '../content/ContentPlaceHolder';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '500px'
    },
    leftContent: {
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContent: {
        backgroundImage: `URL("https://media.istockphoto.com/photos/glad-to-work-with-you-picture-id951514270?k=6&m=951514270&s=612x612&w=0&h=KBRjJWwno25V6v3CtZt2QFkTdFOeeaXwGKE4RNws1a8=")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

function Home() {

    const classes = useStyles()

    return (
        <div className={classes.home} >
            <Grid container className={classes.content}>
                <Grid item xs={12} md={6} className={classes.leftContent}>
                    <Typography variant="h5" className={classes.title}>
                        Technology.
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        Biology.
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        Together.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.rightContent}>
                    {/* backgournd image */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;