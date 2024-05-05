import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

const Filters = () => {
  const jobsList = useSelector((state) => state.fetchJob.data);

  const [minExperience, setMinExperience] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState([]);
  const [remoteOnSite, setRemoteOnSite] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);

  useEffect(() => {
    console.log({
      minExperience,
      companyName,
      location,
      remoteOnSite,
      role,
      minBasePay,
    });
  }, [minExperience, companyName, location, remoteOnSite, role, minBasePay]);

  const uniqueByKey = (key) => {
    return Array.from(new Set(jobsList.map((obj) => obj[key])));
  };

  return (
    <Box width="100%">
      <Box display="flex" gap={2}>
        <FormControl fullWidth>
          <InputLabel id="min-experience-label">Min Experience</InputLabel>
          <Select
            labelId="min-experience-label"
            id="min-experience-select"
            value={minExperience}
            onChange={(event) => setMinExperience(event.target.value)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Company Name"
          variant="outlined"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location-select"
            multiple
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            renderValue={(selected) => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {uniqueByKey("location")
              .filter((item) => item !== "remote")
              .map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                  sx={{ textTransform: "capitalize" }}
                >
                  {item}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="remote-label">Remote/On-site</InputLabel>
          <Select
            labelId="remote-label"
            id="remote-select"
            multiple
            value={remoteOnSite}
            onChange={(event) => setRemoteOnSite(event.target.value)}
            renderValue={(selected) => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {["Remote", "On-site"].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role-select"
            multiple
            value={role}
            onChange={(event) => setRole(event.target.value)}
            renderValue={(selected) => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {uniqueByKey("jobRole").map((item) => (
              <MenuItem
                key={item}
                value={item}
                sx={{ textTransform: "capitalize" }}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="min-base-pay-label">Min Base Pay</InputLabel>
          <Select
            labelId="min-base-pay-label"
            id="min-base-pay-select"
            multiple
            value={minBasePay}
            onChange={(event) => setMinBasePay(event.target.value)}
            renderValue={(selected) => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {[0, 10, 20, 30, 40, 50, 60, 70].map((value) => (
              <MenuItem key={value} value={value}>
                {value}L
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filters;
