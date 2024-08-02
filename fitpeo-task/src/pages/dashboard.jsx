import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../components/sidebar/sidebar";
import ActivityGraph from "../components/activity-graph/activity-graph";
import useDashboardStyles from "../styles/useDashboardStyles";

const Dashboard = () => {
  const classes = useDashboardStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {/* Header */}
        <Grid item xs={12} className={classes.header}>
          <IconButton>
            <SearchIcon className={classes.icon} />
          </IconButton>
          <IconButton>
            <AccountCircleIcon className={classes.icon} />
          </IconButton>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={10}>
          <Grid container spacing={2}>
            {/* Stats Cards */}
            {[
              { title: "Total Orders", value: 75, change: "+3%" },
              { title: "Total Delivered", value: 70, change: "-3%" },
              { title: "Total Cancelled", value: 5 },
              { title: "Total Revenue", value: "$12k", change: "-3%" },
              {
                title: "Net Profit",
                value: "$6759.25",
                change: "+3%",
                progress: 70,
              },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" className={classes.cardTitle}>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" className={classes.cardValue}>
                      {stat.value}
                    </Typography>
                    {stat.change && (
                      <Typography color="textSecondary">
                        {stat.change}
                      </Typography>
                    )}
                    {stat.progress !== undefined && (
                      <CircularProgress
                        variant="determinate"
                        value={stat.progress}
                        className={classes.progress}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}

            {/* Activity Graph */}
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Activity
                  </Typography>
                  <ActivityGraph />
                </CardContent>
              </Card>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Recent Orders
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell>Order No.</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        {
                          customer: "Wade Warren",
                          orderNo: "15412796",
                          amount: "$124.00",
                          status: "Delivered",
                        },
                        {
                          customer: "Jane Cooper",
                          orderNo: "48985796",
                          amount: "$356.02",
                          status: "Delivered",
                        },
                        {
                          customer: "Guy Hawkins",
                          orderNo: "73891375",
                          amount: "$43.88",
                          status: "Cancelled",
                        },
                        {
                          customer: "Kristin Watson",
                          orderNo: "20963732",
                          amount: "$65.00",
                          status: "Pending",
                        },
                        {
                          customer: "Cody Fisher",
                          orderNo: "85715620",
                          amount: "$454.00",
                          status: "Delivered",
                        },
                        {
                          customer: "Savannah Nguyen",
                          orderNo: "76514658",
                          amount: "$128.20",
                          status: "Delivered",
                        },
                      ].map((order, index) => (
                        <TableRow key={index}>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.orderNo}</TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell>{order.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>

            {/* Customer's Feedback */}
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Customer's Feedback
                  </Typography>
                  {[
                    {
                      name: "Jenny Wilson",
                      feedback: "The food was excellent...",
                      rating: 5,
                    },
                    {
                      name: "Dianne Russell",
                      feedback: "We enjoyed the Eggs Benedict...",
                      rating: 4,
                    },
                    {
                      name: "Devon Lane",
                      feedback: "Normally when we order...",
                      rating: 3,
                    },
                  ].map((feedback, index) => (
                    <div key={index} className={classes.feedback}>
                      <Typography variant="body1">{feedback.name}</Typography>
                      <Typography variant="body2">
                        {feedback.feedback}
                      </Typography>
                      <Typography variant="body2">
                        {"⭐".repeat(feedback.rating)}
                      </Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
