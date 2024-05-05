import { Avatar, Badge } from "@mui/material";
import PropTypes from "prop-types";

const BlurredAvatar = ({ img }) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={
        <div
          style={{
            backgroundColor: "green",
            width: 8,
            height: 8,
            borderRadius: "50%",
          }}
        />
      }
      sx={{ filter: "blur(2px)" }}
    >
      <Avatar
        alt="User Image"
        src={img}
        sx={{ width: "30px", height: "30px" }}
      />
    </Badge>
  );
};

BlurredAvatar.propTypes = {
  img: PropTypes.string.isRequired,
};
export default BlurredAvatar;
