import { Box, Button, Typography, Avatar } from "@mui/material";

const Cards = () => {
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
        <Avatar
          alt="Airbnb logo"
          src="https://logo.clearbit.com/airbnb.com"
          sx={{ width: "25px" }}
        />
        <Box>
          <Typography color="#8b8b8b" fontSize="13px" fontWeight="600">
            Airbnb
          </Typography>
          <Typography
            marginTop="3px"
            color="#000000DE"
            fontSize="14px"
            fontWeight="400"
          >
            Senior Frontend Engineer
          </Typography>
          <Typography marginTop="5px" fontWeight="500" fontSize="11px">
            San Francisco, CA
          </Typography>
        </Box>
      </Box>
      <Typography
        margin="8px 0"
        fontWeight="400"
        fontSize="14px"
        color="#6F7987"
      >
        Estimated Salary: Rs18-35 LPA ✅
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
        <Typography>
          Founded in August of 2008 and based in San Francisco, California,
          Airbnb is a trusted community marketplace for people to list,
          discover, and book unique accommodations around the world — online or
          from a mobile phone or tablet. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Repudiandae vero quae possimus expedita optio
          excepturi dolorem reprehenderit omnis quis nobis, porro iure
          consequuntur qui mollitia eum? Tempora tempore eos consequatur?
        </Typography>
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
          3 years
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          gap: "5px",
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
          }}
        >
          Unlock referral asks
        </Button>
      </Box>
    </Box>
  );
};

export default Cards;
