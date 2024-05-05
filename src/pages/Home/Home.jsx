import { useEffect } from "react";
import JobCard from "../../components/cards/JobCard";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions/fetchJobActions";

const Home = () => {
  // useEffect(() => {
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // const body = JSON.stringify({
  //   limit: 10,
  //   offset: 0,
  // });
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => ({
    ...state.fetchJob,
  }));
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log({ data });

  return (
    <Grid container spacing={2}>
      {data &&
        data.jdList &&
        data.jdList.map((job) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
