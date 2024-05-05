import { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import Select from "react-select";
import { useSelector } from "react-redux";

const Filters = ({ onFilterChange }) => {
  const jobsList = useSelector((state) => state.fetchJob.data);

  const [minExperience, setMinExperience] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState([]);
  const [remoteOnSite, setRemoteOnSite] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);

  useEffect(() => {
    onFilterChange({
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
      <Box display="flex" gap="10px" flexWrap="wrap">
        <Select
          isClearable={true}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => ({
            value,
            label: value.toString(),
          }))}
          onChange={(selectedOption) => {
            setMinExperience(selectedOption ? selectedOption.value : null);
          }}
          placeholder="Min Experience"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#1976d2 !important" : "#CCCCCC",
              height: "40px",
            }),
          }}
        />

        <Select
          options={uniqueByKey("location")
            .filter((item) => item !== "remote")
            .map((item) => ({
              value: item,
              label: item,
            }))}
          onChange={(selectedOptions) => {
            setLocation(
              selectedOptions
                ? selectedOptions.map((option) => option.value)
                : []
            );
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#1976d2 !important" : "#CCCCCC",
              height: "40px",
            }),
          }}
          isMulti
          placeholder="Location"
        />

        <Select
          options={[
            { value: "Remote", label: "Remote" },
            { value: "On-site", label: "On-site" },
          ]}
          onChange={(selectedOptions) => {
            setRemoteOnSite(
              selectedOptions
                ? selectedOptions.map((option) => option.value)
                : []
            );
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#1976d2 !important" : "#CCCCCC",
              height: "40px",
            }),
          }}
          isMulti
          placeholder="Remote/On-site"
        />

        <Select
          options={uniqueByKey("jobRole").map((item) => ({
            value: item,
            label: item,
          }))}
          onChange={(selectedOptions) =>
            setRole(
              selectedOptions
                ? selectedOptions.map((option) => option.value)
                : []
            )
          }
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#1976d2 !important" : "#CCCCCC",
              height: "40px",
            }),
          }}
          isMulti
          placeholder="Role"
        />

        <Select
          options={[0, 10, 20, 30, 40, 50, 60, 70].map((value) => ({
            value,
            label: `${value}L`,
          }))}
          onChange={(selectedOption) => {
            setMinBasePay(selectedOption ? selectedOption.value : null);
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#1976d2 !important" : "#CCCCCC",
              height: "40px",
            }),
          }}
          placeholder="Min Base Pay"
          isClearable={true}
        />
        <TextField
          placeholder="Company Name"
          value={companyName}
          onChange={(event) => {
            setCompanyName(event.target.value);
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.3)", // use the original border color on hover
              },
            },
            input: {
              "&::placeholder": {
                // <----- Add this.
                color: "rgb(0,0,0,0.9)",
              },
            },
          }}
          size="small"
        />
      </Box>
    </Box>
  );
};

export default Filters;
