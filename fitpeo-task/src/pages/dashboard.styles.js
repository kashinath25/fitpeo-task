import { makeStyles } from "@mui/material/styles";

const useDashboardStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e273b",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#2f3b52",
    color: "#fff",
  },
  cardTitle: {
    color: "#a1aab8",
  },
  cardValue: {
    color: "#fff",
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  feedback: {
    marginBottom: theme.spacing(2),
  },
  // Responsive styles
  "@media (max-width: 600px)": {
    container: {
      padding: theme.spacing(1),
    },
    header: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    cardTitle: {
      fontSize: "1rem",
    },
    cardValue: {
      fontSize: "1.5rem",
    },
  },
}));

export default useDashboardStyles;
