import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// xs >= 0px
// sm >= 600px
// md >= 960px
// lg >= 1280px
// xl >= 1920px

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const UnderstandingBreakpoints = withStyles(styles)(({ classes }) => (
  <>
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
        </Grid>
      </Grid>
    </div>
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={9} md={3}>
          <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={9} md={3}>
          <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={9} md={3}>
          <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
        </Grid>
        <Grid item xs={12} sm={9} md={3}>
          <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
        </Grid>
      </Grid>
    </div>

    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
        </Grid>
        <Grid item xs="auto" sm="auto" md="auto">
          <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
        </Grid>
      </Grid>
    </div>
  </>
));
export default UnderstandingBreakpoints;
