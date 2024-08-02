import { makeStyles } from "@mui/material/styles";

const useSidebarStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
    backgroundColor: "#2f3b52",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: 60,
    },
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#1c263a",
    },
  },
  listItemIcon: {
    color: "#fff",
  },
  listItemText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useSidebarStyles;
