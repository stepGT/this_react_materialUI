import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';

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

const ColumnDirection = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="space-around" spacing={1}>
      <Grid item xs={3}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>One row</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Two row</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction="row-reverse" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Three row-reverse</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Four row-reverse</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Five column</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Six column</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Hidden smDown>
        <Grid item xs={3}>
          <Grid container direction="column-reverse" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Seven column-reverse</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Eight column-reverse</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      
    </Grid>
  </div>
));
export default ColumnDirection;
