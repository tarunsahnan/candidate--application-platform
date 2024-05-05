import { Box, Button, Typography, Avatar } from "@mui/material";
import PropTypes from "prop-types";
import BlurredAvatar from "../blurredAvatar/BlurredAvatar";

const JobCards = ({ job }) => {
  return (
    <Box
      sx={{
        maxWidth: 360,
        margin: "auto",
        padding: 2,
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important",
      }}
    >
      <Typography>⏳ Posted 10 days ago</Typography>
      <Box sx={{ display: "flex", alignItems: "start", gap: 1, marginTop: 2 }}>
        <Avatar alt="Airbnb logo" src={job.logoUrl} sx={{ width: "25px" }} />
        <Box>
          <Typography color="#8b8b8b" fontSize="13px" fontWeight="600">
            {job.companyName}
          </Typography>
          <Typography
            marginTop="3px"
            color="#000000DE"
            fontSize="14px"
            fontWeight="400"
            sx={{ textTransform: "capitalize" }}
          >
            {job.jobRole}
          </Typography>
          <Typography
            marginTop="5px"
            fontWeight="500"
            fontSize="11px"
            sx={{ textTransform: "capitalize" }}
          >
            {job.location}
          </Typography>
        </Box>
      </Box>
      <Typography
        margin="8px 0"
        fontWeight="400"
        fontSize="14px"
        color="#6F7987"
      >
        Estimated Salary: {job.salaryCurrencyCode}{" "}
        {job.minJdSalary ? job.minJdSalary + "-" : ""}
        {job.maxJdSalary} LPA ✅
      </Typography>
      <Box
        height="250px"
        overflow="hidden"
        sx={{
          maskImage:
            "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
        }}
      >
        <Typography color="#212121" fontSize="16px">
          About Company:
        </Typography>
        <Typography color="#212121" fontWeight="600" fontSize="14px">
          About us
        </Typography>
        <Typography>{job.jobDetailsFromCompany}</Typography>
      </Box>
      <Typography
        color="#2B2BDD"
        marginTop="-30px"
        sx={{ cursor: "pointer" }}
        textAlign="center"
      >
        View Job
      </Typography>
      <Box
        sx={{ display: "flex", marginTop: 1 }}
        flexDirection="column"
        marginTop="10px"
      >
        <Typography sx={{ marginRight: 1 }} color="#8B8B8B" fontSize="13px">
          Minimum Experience:
        </Typography>
        <Typography color="#3E3E3E" fontSize="14px">
          {job.minExp} years
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "rgb(85, 239, 196)",
            color: "black",
            height: "44px",
            fontWeight: "500",
            borderRadius: "8px",
          }}
          hover="none"
        >
          ⚡ Easy Apply
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "rgb(73, 67, 218)",
            color: "white",
            borderRadius: "8px",
            fontWeight: "500",
            height: "44px",
            display: "flex",
            gap: "5px",
          }}
        >
          <BlurredAvatar img="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlurredAvatar img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          Unlock referral asks
        </Button>
      </Box>
    </Box>
  );
};
JobCards.propTypes = {
  job: PropTypes.shape({
    logoUrl: PropTypes.string,
    companyName: PropTypes.string,
    jobRole: PropTypes.string,
    location: PropTypes.string,
    salaryCurrencyCode: PropTypes.string,
    minJdSalary: PropTypes.number,
    maxJdSalary: PropTypes.number,
    jobDetailsFromCompany: PropTypes.string,
    minExp: PropTypes.number,
  }).isRequired,
};
export default JobCards;
