import JobCard from "../../components/cards/JobCard";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
    </Grid>
  );
};

export default Home;
