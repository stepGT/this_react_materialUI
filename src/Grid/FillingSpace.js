import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

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

const FillingSpace = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          flex-start
          <Grid container justify="flex-start">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          center
          <Grid container justify="center">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          flex-end
          <Grid container justify="flex-end">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          space-between
          <Grid container justify="space-between">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          space-around
          <Grid container justify="space-around">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          space-evenly
          <Grid container justify="space-evenly">
            <Grid item>
              <Chip label="xs=12" />
            </Grid>
            <Grid item>
              <Chip label="sm=6" />
            </Grid>
            <Grid item>
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
));
export default FillingSpace;
