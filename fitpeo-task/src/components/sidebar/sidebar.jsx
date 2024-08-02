import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import useSidebarStyles from "./sidebar.styles";

const Sidebar = () => {
  const classes = useSidebarStyles();

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <List>
        <ListItem button component={Link} to="/" className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className={classes.listItemText} />
        </ListItem>
        {/* Add more ListItems for other navigation links */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
