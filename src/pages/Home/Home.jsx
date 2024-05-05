import { useEffect, useState, useRef } from "react";
import JobCard from "../../components/cards/JobCard";
import { Grid, CircularProgress, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions/fetchJobActions";
import Filters from "../../components/filters/Filters";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, totalCount } = useSelector((state) => state.fetchJob);
  const [pageNumber, setPageNumber] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const pageSize = 10;

  useEffect(() => {
    console.log({ totalCount });
  }, [totalCount]);

  useEffect(() => {
    console.log("fetching data", pageNumber);
    dispatch(fetchData(pageNumber, pageSize));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadMoreData = () => {
    console.log({ totalCount, i: pageNumber * pageSize });
    if (totalCount && pageNumber * pageSize >= totalCount) return;
    if (!loading && !loadingMore) {
      setLoadingMore(true);
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!loading) setLoadingMore(false);
  }, [loading]);

  return (
    <Box display="flex" flexDirection="column" gap="60px">
      {data && (
        <>
          <Filters />
          <Grid container spacing={2}>
            {data.map((job, index) => (
              <Grid key={job.jdUid + index} item xs={12} sm={6} md={4} lg={3}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {((loading && !data) || loadingMore) && (
        <Box display="flex" justifyContent="center" marginTop="30px">
          <CircularProgress size={50} />
        </Box>
      )}

      {totalCount && pageNumber * pageSize >= totalCount && (
        <Typography variant="body1" align="center">
          No more jobs at this point, please try again later.
        </Typography>
      )}
    </Box>
  );
};

export default Home;
