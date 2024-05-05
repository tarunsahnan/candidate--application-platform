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
  const { loading, data, totalCount, pageNumber, limit } = useSelector(
    (state) => state.fetchJob
  );

  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(initialFilterState);

  const onFilterChange = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    console.log({ filteredData });
  }, [filteredData]);

  const handleScroll = (e) => {
    const container = e.target;
    const bottomOffset = 100;

    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - bottomOffset
    ) {
      console.log("1212");
      if (!loading) {
        console.log({ loading });
        dispatch(fetchData());
      }
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
        padding: "16px",
      }}
      onScroll={handleScroll}
    >
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
      </Box>

      {loading && (
        <Box
          marginBottom="50px"
          display="flex"
          justifyContent="center"
          marginTop="30px"
        >
          <CircularProgress size={50} />
        </Box>
      )}
      {totalCount && pageNumber * limit >= totalCount && (
        <Typography
          variant="body1"
          align="center"
          marginBottom="50px"
          display="flex"
          justifyContent="center"
          marginTop="30px"
        >
          No more jobs at this point, please try again later.
        </Typography>
      )}
    </div>
  );
};

export default Home;
