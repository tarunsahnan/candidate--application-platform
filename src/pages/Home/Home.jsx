import { useEffect, useState, useRef } from "react";
import JobCard from "../../components/cards/JobCard";
import { Grid, CircularProgress, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions/fetchJobActions";
import Filters from "../../components/filters/Filters";

const initialFilterState = {
  minExperience: [],
  companyName: "",
  location: [],
  remoteOnSite: [],
  role: [],
  minBasePay: [],
};

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.fetchJob);
  const [pageNumber, setPageNumber] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(initialFilterState);

  const onFilterChange = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    console.log({ filteredData });
  }, [filteredData]);

  const pageSize = 10;

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
    // console.log({ totalCount, i: pageNumber * pageSize });
    // if (totalCount && pageNumber * pageSize >= totalCount) return;
    if (!loading && !loadingMore) {
      // setPageNumber(pageNumber + 1);
      setLoadingMore(true);
    }
  };

  useEffect(() => {
    if (!loading) setLoadingMore(false);
  }, [loading]);

  useEffect(() => {
    if (data) {
      const calculateFilteredData = () => {
        console.log({ filters });
        const isFilterAdded =
          filters.minExperience.length !== 0 ||
          filters.companyName !== "" ||
          filters.location.length !== 0 ||
          filters.remoteOnSite.length !== 0 ||
          filters.role.length !== 0 ||
          filters.minBasePay.length !== 0;
        if (!isFilterAdded) {
          setFilteredData(data);
          return;
        }
        const newData = data.filter((job) => {
          if (filters.minExperience) {
            if (job.minExp && job.minExp < filters.minExperience) {
              return false;
            } else if (!job.minExp) {
              return false;
            }
          }
          if (
            filters.companyName.length &&
            !job.companyName.toLowerCase().includes(filters.companyName)
          )
            return false;
          if (
            filters.location.length &&
            !filters.location.includes(job.location)
          )
            return false;

          if (filters.remoteOnSite.length === 1) {
            if (
              filters.remoteOnSite.includes("Remote") &&
              job.location !== "remote"
            )
              return false;
            if (
              filters.remoteOnSite.includes("On-site") &&
              job.location === "remote"
            )
              return false;
          }

          if (filters.role.length && !filters.role.includes(job.jobRole))
            return false;
          if (filters.minBasePay) {
            if (!job.minJdSalary && job.maxJdSalary < filters.minBasePay)
              return false;
            else if (job.minJdSalary && job.minJdSalary < filters.minBasePay)
              return false;
          }
          return true;
        });
        console.log({ data, newData });
        setFilteredData(newData);
      };

      calculateFilteredData(filters);
    }
  }, [data, filters]);

  return (
    <Box display="flex" flexDirection="column" gap="60px">
      {data && (
        <>
          <Filters onFilterChange={onFilterChange} />
          <Box display="flex" flexWrap="wrap" gap="30px" spacing={2}>
            {filteredData.map((job, index) => (
              <JobCard job={job} key={job.jdUid + index} />
            ))}
          </Box>
        </>
      )}
      {((loading && !data) || loadingMore) && (
        <Box display="flex" justifyContent="center" marginTop="30px">
          <CircularProgress size={50} />
        </Box>
      )}

      {/* {totalCount && pageNumber * pageSize >= totalCount && (
        <Typography variant="body1" align="center">
          No more jobs at this point, please try again later.
        </Typography>
      )} */}
    </Box>
  );
};

export default Home;
