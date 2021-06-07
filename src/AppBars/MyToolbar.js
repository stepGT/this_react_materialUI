import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
});

const MyToolbar = withStyles(styles)(
  class extends Component {
    state = { anchor: null };
    closeMenu = () => this.setState({ anchor: null });
    render() {
      const { classes, title, MenuItems, RightButton } = this.props;
      return (
        <Fragment>
          <AppBar>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={(e) => this.setState({ anchor: e.currentTarget })}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={this.state.anchor}
                open={Boolean(this.state.anchor)}
                onClose={this.closeMenu}
              >
                <MenuItems closeMenu={this.closeMenu} />
              </Menu>
              <Typography
                variant="subtitle2"
                color="inherit"
                className={classes.flex}
                component="h1"
              >
                {title}
              </Typography>
              <RightButton />
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
    }
  }
);

const ToolbarAbstraction = withStyles(styles)(({ classes, ...props }) => (
  <div className={classes.root}>
    <MyToolbar
      MenuItems={({ closeMenu }) => (
        <Fragment>
          <MenuItem onClick={closeMenu}>Page 1</MenuItem>
          <MenuItem onClick={closeMenu}>Page 2</MenuItem>
          <MenuItem onClick={closeMenu}>Page 3</MenuItem>
        </Fragment>
      )}
      RightButton={() => (
        <Button color="secondary" variant="contained">
          Logout
        </Button>
      )}
      {...props}
    />
  </div>
));
export default ToolbarAbstraction;
